angular
    .module('planner', [])
    .directive('category', category);

function category() {
    var spec,
        template;

    template = '<p>checking</p>';

    spec = {
        restrict: 'E',
        template: template
    };

    return spec;
};