import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GridOptions } from "ag-grid";
import { BluecolumnComponent } from "../../grid-ui/bluecolumn/bluecolumn.component";

import { Audittrail } from '../dto/audittrail';
import { AudittrailService } from '../service/audittrail.service';
import { ApiResponse } from '../../common/apiresponse';
import * as moment from 'moment';

@Component({
  selector: 'app-audittrailgrid',
  templateUrl: './audittrailgrid.component.html',
  styleUrls: ['./audittrailgrid.component.css']
})
export class AudittrailgridComponent implements OnInit {

	gridOptions: GridOptions;
	audittrails: Audittrail[];
	audittrailList$;
	defaultColDef;
	constructor(
		private router: Router,
		private audittrailService: AudittrailService
	) {
		
		this.audittrailList$ = this.audittrailService.getAudittrailList();
		this.defaultColDef = {
			flex: 1,
			resizable: true,
			floatingFilter: true,
			wrapText: true,
			autoHeight: true,
			sortable: true,
			minWidth: 200,
		};

		this.gridOptions = <GridOptions> {
			columnDefs: this.createColumnDefs(),
			enableFilter: true,
			pagination: true,
			paginationPageSize: 10,
			rowSelection: 'single',
            onGridReady: () => {
                this.audittrailList$.subscribe(
                    apiResponse => {
						this.loadAudittrailsIntoArray(apiResponse);
                        // the initial full set of data
                        // note that we don't need to un-subscribe here as it's a one off data load
                        if (this.gridOptions.api) { // can be null when tabbing between the examples
                            this.gridOptions.api.setRowData(this.audittrails);
                        }
                    }
                );
                this.gridOptions.api.sizeColumnsToFit();
            },
			/* onSelectionChanged: () => {
				var selectedRows = this.gridOptions.api.getSelectedRows();
				var selectedItemId = -1;
				selectedRows.forEach( function(selectedRow, index) {
					selectedItemId = selectedRow.componentId;
				});
				router.navigate(['/audittrails/' + selectedItemId]);
			}, */
            onCellClicked: (event) => {
				if (event.column.getColId() === 'editAction') {
				  // do your stuff here
				  var selectedRows = this.gridOptions.api.getSelectedRows();
				  var selectedItemId = -1;
				  selectedRows.forEach(function (selectedRow, index) {
					selectedItemId = selectedRow.componentId;
				  });
				  router.navigate(['/dcnpatinitiates/' + selectedItemId]);
				}
			  }
			
		};

	}

	ngOnInit() {
	}	
		
	private loadAudittrailsIntoArray(apiResponse){
		if (!apiResponse.success){
			return;
		}
		
		this.audittrails = apiResponse.data.map(obj =>{
			var rObj = <Audittrail>{
				componentId: obj.componentId,
				status: obj.status,
				version: obj.version ,
					userId: obj.userId,
					operationType: obj.operationType,
					operationTime: obj.operationTime,
					componentName: obj.componentName,
					requestObject: obj.requestObject

			};
			return rObj;
		});
	}
	
	onAddAudittrail(){
		this.router.navigate(['/audittrails/-1']);
	}
	
	private createColumnDefs(){
		return [
			{
				headerName: "",
				field: "editAction",
				maxWidth: 50,
				cellRenderer: function () {
				  return '<span><i class="fa fa-edit"></i></span>';
				},
				pinned: 'left',
				lockPinned: true,
				cellClass: 'lock-pinned',
			},			
            /*  {
                headerName: "ID",
                field: "componentId",
				filter: "agNumberColumnFilter"
            } , */
			
			{
				headerName: "User Id",
				field: "User Id",
				filter: "agNumberColumnFilter"
			},
			{
				headerName: "Operation Type",
				field: "operationType",
				filter: "agTextColumnFilter"
			},
			{
				headerName: "Operation Time",
				field: "operationTime",
				filter: "agDateColumnFilter"
			},
			{
				headerName: "componentName",
				field: "componentName",
				filter: "agTextColumnFilter"
			},
			{
				headerName: "Operation Object",
				field: "operationObject",
				filter: "agTextColumnFilter"
			}		
        ];
	}
	
	
	
	dateFormatter(params) {
		return moment(params.value).format('YYYY-MM-DD HH:mm:ss');
	  }
	passwordFormatter(params) {
		return "*****";
	}	
}
