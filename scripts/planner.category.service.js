/**
 * category service
 */
angular
    .module('planner')
    .service('categoryService', categoryService);

/**
 * categoryService handles category data
 * @name categoryService
 * @return {String[]} category names
 */
function categoryService() {
    var category = ['Grocery', 'Entertainment', 'education'];
    this.getCategory = function(){
        return category;
    };
}