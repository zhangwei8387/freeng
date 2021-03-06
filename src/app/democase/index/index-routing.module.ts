import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index.component';
import {NgModule} from '@angular/core';
const childRoutes: Routes = [
  {path: 'introduction', loadChildren: '../main/main.module#MainModule'},
  {path: 'ripple', loadChildren: '../main-ripple/main-ripple.module#MainRippleModule'},
  {path: 'input', loadChildren: '../main-form/main-form.module#MainFormModule'},
  {path: 'buttons', loadChildren: '../main-buttons/main-buttons.module#MainButtonsModule'},
  {path: 'tabs', loadChildren: '../main-tab/main-tab.module#MainTabModule'},
  {path: 'modals', loadChildren: '../main-modal/main-modal.module#MainModalModule'},
  {path: 'tooltips', loadChildren: '../main-tooltip/main-tooltip.module#MainTooltipModule'},
  {path: 'notification', loadChildren: '../main-notification/main-notification.module#MainNotificationModule'},
  {path: 'typography', loadChildren: '../main-typography/main-typography.module#MainTypographyModule'},
  {path: 'table', loadChildren: '../main-table/main-table.module#MainTableModule'},
  {path: 'datatable', loadChildren: '../main-datatable/main-datatable.module#MainDatatableModule'},
  {path: 'accordion', loadChildren: '../main-accordion/main-accordion.module#MainAccordionModule'},
  {path: 'list', loadChildren: '../main-list/main-list.module#MainListModule'},
  {path: 'loading', loadChildren: '../main-loading/main-loading.module#MainLoadingModule'},
  {path: 'scroll', loadChildren: '../main-scroll/main-scroll.module#MainScrollModule'},
  {path: 'colorpicker', loadChildren: '../main-colorpicker/main-colorpicker.module#MainColorpickerModule'},
  {path: 'calendar', loadChildren: '../main-calendar/main-calendar.module#MainCalendarModule'},
  {path: 'card', loadChildren: '../main-card/main-card.module#MainCardModule'},
  {path: 'dropdown', loadChildren: '../main-dropdown/main-dropdown.module#MainDropdownModule'},
  {path: 'range', loadChildren: '../main-range/main-range.module#MainRangeModule'},
  {path: 'shadow', loadChildren: '../main-shadow/main-shadow.module#MainShadowModule'},
  {path: 'shrink', loadChildren: '../main-shrink/main-shrink.module#MainShrinkModule'},
  {path: 'progress', loadChildren: '../main-progress/main-progress.module#MainProgressModule'},
  {path: 'rating', loadChildren: '../main-rating/main-rating.module#MainRatingModule'},
  {path: 'select', loadChildren: '../main-select/main-select.module#MainSelectModule'},
  {path: 'cascader', loadChildren: '../main-cascader/main-cascader.module#MainCascaderModule'},
  {path: 'chip', loadChildren: '../main-chip/main-chip.module#MainChipModule'},
  {path: 'getting-started', loadChildren: '../main-start/main-start.module#MainStartModule'},
  {path: 'checkbox', loadChildren: '../main-checkbox/main-checkbox.module#MainCheckboxModule'},
  {path: 'radio', loadChildren: '../main-radio/main-radio.module#MainRadioModule'},
  {path: 'switch', loadChildren: '../main-switch/main-switch.module#MainSwitchModule'},
  {path: 'breadcrumb', loadChildren: '../main-breadcrumb/main-breadcrumb.module#MainBreadcrumbModule'},
  {path: 'icon', loadChildren: '../main-icon/main-icon.module#MainIconModule'},
  {path: 'badge', loadChildren: '../main-badge/main-badge.module#MainBadgeModule'},
  {path: 'spinner', loadChildren: '../main-spinner/main-spinner.module#MainSpinnerModule'},
  {path: 'changelog', loadChildren: '../main-changelog/main-changelog.module#MainChangelogModule'},
  {path: 'tree', loadChildren: '../main-tree/main-tree.module#MainTreeModule'},
  {path: 'image', loadChildren: '../main-image/main-image.module#MainImageModule'},
  {path: 'grid', loadChildren: '../main-grid/main-grid.module#MainGridModule'},
  {path: 'toast', loadChildren: '../main-toast/main-toast.module#MainToastModule'},
  {path: 'upload', loadChildren: '../main-upload/main-upload.module#MainUploadModule'},
  {path: 'pagination', loadChildren: '../main-pagination/main-pagination.module#MainPaginationModule'},
  {path: 'slide', loadChildren: '../main-slide/main-slide.module#MainSlideModule'},
  {path: 'editor', loadChildren: '../main-editor/main-editor.module#MainEditorModule'},
  {path: 'columns', loadChildren: '../main-column/main-column.module#MainColumnModule'},
  {path: 'contextmenu', loadChildren: '../main-contextmenu/main-contextmenu.module#MainContextmenuModule'},
  {path: 'fullpage', loadChildren: '../main-fullpage/main-fullpage.module#MainFullpageModule'},
  {path: 'timeline', loadChildren: '../main-timeline/main-timeline.module#MainTimelineModule'},
  {path: 'draggable', loadChildren: '../main-draggable/main-draggable.module#MainDraggableModule'},
  {path: 'charts', loadChildren: '../main-chart/main-chart.module#MainChartModule'},
  {path: 'sidenav', loadChildren: '../main-sidenav/main-sidenav.module#MainSidenavModule'},
  {path: 'flow', loadChildren: '../main-flow/main-flow.module#MainFlowModule'},
  {path: 'media', loadChildren: '../main-media/main-media.module#MainMediaModule'},
  {path: 'cropper', loadChildren: '../main-cropper/main-cropper.module#MainCropperModule'},
  {path: 'panel', loadChildren: '../main-panel/main-panel.module#MainPanelModule'},
  {path: '', redirectTo: '/main/introduction', pathMatch: 'full'},
  {path: '**', redirectTo: '/error'}
];

const routes: Routes = [{
  path: '', component: IndexComponent, children: childRoutes
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
