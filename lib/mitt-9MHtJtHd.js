function n(s) {
  return s = s || /* @__PURE__ */ new Map(), {
    /**
     * A Map of event names to registered handler functions.
     */
    all: s,
    /**
     * Register an event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
     * @param {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    //@ts-expect-error
    on(t, i) {
      const e = s.get(t);
      e ? e.push(i) : s.set(t, [i]);
    },
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    //@ts-expect-error
    off(t, i) {
      const e = s.get(t);
      e && (i ? e.splice(e.indexOf(i) >>> 0, 1) : s.set(t, []));
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `'*'` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing '*' handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit(t, i) {
      let e = s.get(t);
      e && [...e].map((f) => {
        f(i);
      }), e = s.get("*"), e && [...e].map((f) => {
        f(t, i);
      });
    }
  };
}
export {
  n as m
};
