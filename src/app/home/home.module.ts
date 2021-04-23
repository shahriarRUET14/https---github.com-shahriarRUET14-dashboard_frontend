import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TranslateModule } from "@ngx-translate/core";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { NgIdleModule } from "ng2-idle-core";
import { Ng2CompleterModule } from "ng2-completer";

import { UserSessionService } from "../common";
import { AlertComponent } from "../alert/_directives/index";
import { AlertService } from "../alert/_services/index";

import { HomeComponent } from "./home.component";
import { HomeRountingModule } from "./home-rounting.module";

import { HeaderComponent } from "./header/header.component";
import { LeftSideComponent } from "./left-side/left-side.component";
import { ControlSidebarComponent } from "./control-sidebar/control-sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

import { AgGridModule } from "ag-grid-angular";
import { BluecolumnComponent } from "../grid-ui/bluecolumn/bluecolumn.component";

import { UserComponent } from "../user/user.component";
import { UserdetailComponent } from "../user/detail/userdetail.component";
import { UsergridComponent } from "../user/grid/usergrid.component";

import { RoleComponent } from "../role/role.component";
import { RoledetailComponent } from "../role/detail/roledetail.component";
import { RolegridComponent } from "../role/grid/rolegrid.component";

import { FunctioncodeComponent } from "../functioncode/functioncode.component";
import { FunctioncodedetailComponent } from "../functioncode/detail/functioncodedetail.component";
import { FunctioncodegridComponent } from "../functioncode/grid/functioncodegrid.component";
import { UserroleComponent } from "../userrole/userrole.component";
import { RolefeatureComponent } from "../rolefeature/rolefeature.component";
import { ChangepasswordComponent } from "../changepassword/changepassword.component";
import { FileuploadComponent } from "../fileupload/fileupload.component";
import { FileuploaddetailComponent } from "../fileupload/detail/fileuploaddetail.component";
import { FileuploadgridComponent } from "../fileupload/grid/fileuploadgrid.component";
import { AudittrailComponent } from "../audittrail/audittrail.component";
import { AudittraildetailComponent } from "../audittrail/detail/audittraildetail.component";
import { AudittrailgridComponent } from "../audittrail/grid/audittrailgrid.component";
import { MatDividerModule, MatCardModule } from "@angular/material";
import { AreaGraphComponent } from "../widgets/area-graph/area-graph.component";
import { HighchartsChartModule } from "highcharts-angular";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CardComponent } from "../widgets/card/card.component";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PieComponent } from "../widgets/pie/pie.component";
import { NetworkGraphComponent } from "../widgets/network-graph/network-graph.component";
import { PercentageDataComponent } from "../widgets/percentage-data/percentage-data.component";
import { AutomationitemComponent } from "../automationitem/automationitem.component";
import { AutomationitemdetailComponent } from "../automationitem/detail/automationitemdetail.component";
import { AutomationitemgridComponent } from "../automationitem/grid/automationitemgrid.component";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { AutomationwiseschedulerconfigurationComponent } from "../automationwiseschedulerconfiguration/automationwiseschedulerconfiguration.component";
import { AutomationwiseschedulerconfigurationdetailComponent } from "../automationwiseschedulerconfiguration/detail/automationwiseschedulerconfigurationdetail.component";
import { AutomationwiseschedulerconfigurationgridComponent } from "../automationwiseschedulerconfiguration/grid/automationwiseschedulerconfigurationgrid.component";
import { CronJobsModule } from "../lib-cron/cron-jobs.module";
import { AutomationschedulerComponent } from "../automationscheduler/automationscheduler.component";
import { AutomationschedulerdetailComponent } from "../automationscheduler/detail/automationschedulerdetail.component";
import { AutomationschedulergridComponent } from "../automationscheduler/grid/automationschedulergrid.component";
import { HttpModule } from "@angular/http";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SchedulestatusComponent } from "../schedulestatus/schedulestatus.component";
import { SchedulestatusdetailComponent } from "../schedulestatus/detail/schedulestatusdetail.component";
import { SchedulestatusgridComponent } from "../schedulestatus/grid/schedulestatusgrid.component";
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from "@angular/material/list";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableExporterModule } from "mat-table-exporter";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRountingModule,
    HttpClientModule,
    TranslateModule,
    NgbDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([BluecolumnComponent]),
    NgIdleModule.forRoot(),
    Ng2CompleterModule,
    MatDividerModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    CronJobsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatRadioModule,
    RxReactiveFormsModule,
    MatListModule,
    MatTableModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatExpansionModule,
    MatTableExporterModule,
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    LeftSideComponent,
    ControlSidebarComponent,
    FooterComponent,
    DashboardComponent,
    UserComponent,
    BluecolumnComponent,
    UserdetailComponent,
    UsergridComponent,
    AlertComponent,
    RoleComponent,
    RoledetailComponent,
    RolegridComponent,
    FunctioncodeComponent,
    FunctioncodedetailComponent,
    FunctioncodegridComponent,
    UserroleComponent,
    RolefeatureComponent,
    ChangepasswordComponent,
    FileuploadComponent,
    FileuploaddetailComponent,
    FileuploadgridComponent,
    AudittrailComponent,
    AudittraildetailComponent,
    AudittrailgridComponent,
    AreaGraphComponent,
    CardComponent,
    PieComponent,
    NetworkGraphComponent,
    PercentageDataComponent,
    AutomationitemComponent,
    AutomationitemdetailComponent,
    AutomationitemgridComponent,
    AutomationwiseschedulerconfigurationComponent,
    AutomationwiseschedulerconfigurationdetailComponent,
    AutomationwiseschedulerconfigurationgridComponent,
    AutomationschedulerComponent,
    AutomationschedulerdetailComponent,
    AutomationschedulergridComponent,
    SchedulestatusComponent,
    SchedulestatusdetailComponent,
    SchedulestatusgridComponent,
    
  ],
  providers: [AlertService, UserSessionService],
})
export class HomeModule {}
