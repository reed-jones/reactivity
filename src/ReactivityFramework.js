class ReactivityFramework {
  constructor({ data = {}, computed = {}, onUpdate = null }) {
    this.$data = data
    this.$computed = computed

    let _self = this

    let prox = new Proxy(_self, {
      get(obj, key) {
        if (Object.keys(_self.$computed).includes(key)) {
          return _self.$computed[key].bind(prox)();
        } else if (Object.keys(_self.$data).includes(key)) {
          return Reflect.get(_self.$data, key)
        }

        return Reflect.get(obj, key)
      },
      set(obj, key, val) {
        // disallow update on computed properties
        if (Object.keys(_self.$computed).includes(key)) {
          return true // Reflect.set(_self.computed, key, val);
        } else if (Object.keys(_self.$data).includes(key)) {
          let updated = Reflect.set(_self.$data, key, val)
          if (typeof onUpdate === 'function') {
            onUpdate.bind(prox)(_self)
          }

          return updated;
        }

        return Reflect.set(obj, key, val)
      }
    })
    if (typeof onUpdate === 'function') {
      onUpdate.bind(prox)(_self)
    }
    return prox
  }
}

export const Reactivity = ReactivityFramework;