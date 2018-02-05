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
 
    TomatoAnnouncementsFeedController.$inject = ['tomatoAnnouncementsFeedService', '$sce'];
 
    function TomatoAnnouncementsFeedController(tomatoAnnouncementsFeedService, $sce) {
        var vm = this;
        vm.filteredData = [];
        vm.searchText = "";
        vm.maxPerPage = 15;

        activate();

        function activate() {
            getFilteredData(vm.announcements, vm.owners);
        }

        function getFilteredData(announcementsData, ownersData) {
            vm.filteredData = tomatoAnnouncementsFeedService.getOwnerInfo(announcementsData, ownersData);
        }

    }
 })();
 