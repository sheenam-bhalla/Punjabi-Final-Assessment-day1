// Add your code here, create additional directives if needed.
(function() {
    'use strict';
 
    angular
        .module('app')
        .directive('tomatoAnnouncementsFeed', tomatoAnnouncementsFeed);
 
    function tomatoAnnouncementsFeed() {
        var directive = {
            scope: {
                announcements: "<",
                owners: "<"
            },
            restrict: 'E',
            controller: TomatoAnnouncementsFeedController,
            bindToController: true,
            controllerAs: 'vm',
            templateUrl: './app/shared-components/tomato-announcements-feed/tomato-announcements-feed.directive.html'
        };
 
        return directive;
    }
 
    TomatoAnnouncementsFeedController.$inject = ['tomatoAnnouncementsFeedService', '$sce', 'filterService'];
 
    function TomatoAnnouncementsFeedController(tomatoAnnouncementsFeedService, $sce, filterService) {
        var vm = this;
        vm.filteredData = [];
        vm.searchText = "";
        vm.maxPerPage = 15;
        vm.filterDataByType = filterDataByType;
        activate();

        function activate() {
            getFilteredData(vm.announcements, vm.owners);
        }

        function getFilteredData(announcementsData, ownersData) {
            vm.filteredData = tomatoAnnouncementsFeedService.getOwnerInfo(announcementsData, ownersData);
            vm.dataToShow = vm.filteredData;
            vm.Types = _.uniq(_(vm.filteredData).map('Type.Title').value());
            vm.Types.unshift('All');
            vm.selectedType = 'All';
        }
      
        function filterDataByType(){
            vm.filteredData = filterService.filterDataByType(vm.selectedType, vm.filteredData, vm.dataToShow);
        }
    }
 })();
 