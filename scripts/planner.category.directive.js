/**
 * 
 */
angular
    .module('planner')
    .directive('category', category);

/**
 * category directive to show categories
 * @namespace category
 * @return {<category />} dropdown list of categories list
 */
function category() {
    var spec,
        template = [];

    /** @todo replace with dynamic data */
    template.push('<select name="" id="">');
    template.push(    '<option value="test1">test1</option>');
    template.push(    '<option value="test2">test2</option>');
    template.push(    '<option value="test3">test3</option>');
    template.push(    '<option value="test4">test4</option>');
    template.push('</select>');
    template.join('');

    spec = {
        restrict: 'E',
        template: template
    };

    return spec;
};