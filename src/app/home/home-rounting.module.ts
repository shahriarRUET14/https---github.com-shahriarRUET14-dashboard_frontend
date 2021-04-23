import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { UserComponent } from '../user/user.component';
import { UserdetailComponent } from '../user/detail/userdetail.component';

import { RoleComponent } from '../role/role.component';
import { RoledetailComponent } from '../role/detail/roledetail.component';

import { FunctioncodeComponent } from '../functioncode/functioncode.component';
import { FunctioncodedetailComponent } from '../functioncode/detail/functioncodedetail.component';

import { UserroleComponent } from '../userrole/userrole.component';
import { RolefeatureComponent } from '../rolefeature/rolefeature.component';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { FileuploadComponent } from '../fileupload/fileupload.component';
import { FileuploaddetailComponent } from '../fileupload/detail/fileuploaddetail.component';
import { AudittrailComponent } from '../audittrail/audittrail.component';
import { AudittraildetailComponent } from '../audittrail/detail/audittraildetail.component';
import { AutomationitemComponent } from '../automationitem/automationitem.component';
import { AutomationitemdetailComponent } from '../automationitem/detail/automationitemdetail.component';
import { AutomationwiseschedulerconfigurationComponent } from '../automationwiseschedulerconfiguration/automationwiseschedulerconfiguration.component';
import { AutomationwiseschedulerconfigurationdetailComponent } from '../automationwiseschedulerconfiguration/detail/automationwiseschedulerconfigurationdetail.component';
import { AutomationschedulerComponent } from '../automationscheduler/automationscheduler.component';
import { AutomationschedulerdetailComponent } from '../automationscheduler/detail/automationschedulerdetail.component';
import { SchedulestatusComponent } from '../schedulestatus/schedulestatus.component';
import { SchedulestatusdetailComponent } from '../schedulestatus/detail/schedulestatusdetail.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'mminfo', component: DashboardComponent },
			{ path: 'users', component: UserComponent },
			{ path: 'users/:id', component: UserdetailComponent },
			{ path: 'signup', component: UserComponent },
			{ path: 'signup/:id', component: UserdetailComponent },
			{ path: 'users/:id/changepass', component: ChangepasswordComponent },
			{ path: 'roles', component: RoleComponent },
			{ path: 'roles/:id', component: RoledetailComponent },
			{ path: 'functioncodes', component: FunctioncodeComponent },
			{ path: 'functioncodes/:id', component: FunctioncodedetailComponent },
			{ path: 'userroleassign', component: UserroleComponent },	
			{ path: 'rolefeatureassign', component: RolefeatureComponent },
			{ path: 'fileuploads', component: FileuploadComponent },
			{ path: 'fileuploads/:id', component: FileuploaddetailComponent },
			{ path: 'audittrails', component: AudittrailComponent },
			{ path: 'audittrails/:id', component: AudittraildetailComponent },
			{ path: 'automationitems', component: AutomationitemComponent },
			{ path: 'automationitems/:id', component: AutomationitemdetailComponent },
			{ path: 'automationwiseschedulerconfigurations', component: AutomationwiseschedulerconfigurationComponent },
			{ path: 'automationwiseschedulerconfigurations/:id', component: AutomationwiseschedulerconfigurationdetailComponent },
			{ path: 'automationschedulers', component: AutomationschedulerComponent },
			{ path: 'automationschedulers/:id', component: AutomationschedulerdetailComponent },
			{ path: 'schedulestatuss', component: SchedulestatusComponent },
			{ path: 'schedulestatuss/:id', component: SchedulestatusdetailComponent },
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRountingModule { }
