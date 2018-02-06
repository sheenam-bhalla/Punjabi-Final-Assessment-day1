(function() {
    'use strict';

    angular
        .module('app')
        .factory('filterService', filterService);
    
    filterService.$inject = [];

    function filterService() {
        var service = {
            filterDataByType: filterDataByType,            
        };

        return service;

        function filterDataByType(title,filteredData,completeData) {
            if(title == 'All'){
                filteredData = completeData;
            }
            else{
                filteredData = completeData;
                filteredData = _(filteredData).filter({Type:{Title:title}}).value();
            }            
            return filteredData;
        }
    }
})();