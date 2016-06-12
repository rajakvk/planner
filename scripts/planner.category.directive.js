/**
 * @example
 * <category />
 */
angular
    .module('planner')
    .directive('category', category);

/**
 * category directive to show categories
 * @name category
 * @required categoryService
 * @return {<category />} dropdown list of categories list
 */
function category(categoryService) {
    var spec,
        categories = categoryService.getCategory() || [],
        template = [];

    template.push('<select name="" id="">');
    template.push(    '<option value="None">Select a Category</option>');
    for (var category in categories) {
        template.push(    '<option value="test2">'+ categories[+category] +'</option>');
    }
    template.push('</select>');
    template.join('');

    spec = {
        restrict: 'E',
        template: template
    };

    return spec;
};