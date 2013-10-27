define(["underscore"], function(Underscore) {
	_.mixin({
        containsAll: function(container, contained) {
            return _.all(contained, function(val) {
                return _.contains(container, val);
            })
        },

        containsAny: function(container, contained) {
            return _.any(contained, function(val) {
                return _.contains(container, val);
            })
        },
    });
});
