import { Direction } from '@angular/cdk/bidi';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule, NgClass, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableExportUtil } from '@shared';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { AllStaffDeleteComponent } from 'app/admin/staff/all-staff/dialog/delete/delete.component';
import { AllStaffFormComponent } from 'app/admin/staff/all-staff/dialog/form-dialog/form-dialog.component';
import { Staff } from 'app/admin/staff/all-staff/staff.model';
import { StaffService } from 'app/admin/staff/all-staff/staff.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-recruiters-list',
  imports: [
    BreadcrumbComponent,
            FeatherIconsComponent,
            CommonModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule,
            MatButtonModule,
            MatTooltipModule,
            MatSelectModule,
            ReactiveFormsModule,
            FormsModule,
            MatOptionModule,
            MatCheckboxModule,
            MatTableModule,
            MatSortModule,
            NgClass,
            MatRippleModule,
            MatProgressSpinnerModule,
            MatMenuModule,
            MatPaginatorModule,
            DatePipe,
  ],
  templateUrl: './recruiters-list.component.html',
  styleUrl: './recruiters-list.component.scss'
})
export class RecruitersListComponent {
  columnDefinitions = [
    { def: 'select', label: 'Checkbox', type: 'check', visible: true },
    { def: 'id', label: 'ID', type: 'text', visible: false },
    { def: 'name', label: 'Name', type: 'text', visible: true },
    { def: 'department', label: 'Department', type: 'text', visible: true },
    { def: 'role', label: 'Role', type: 'text', visible: true },
    { def: 'mobile', label: 'Mobile', type: 'phone', visible: true },
    { def: 'email', label: 'Email', type: 'email', visible: true },
    { def: 'address', label: 'Address', type: 'address', visible: true },
    { def: 'status', label: 'Status', type: 'text', visible: true },
    { def: 'joining_date', label: 'Joining Date', type: 'date', visible: true },
    { def: 'gender', label: 'Gender', type: 'text', visible: true },
    { def: 'salary', label: 'Salary', type: 'text', visible: false },
    { def: 'experience', label: 'Experience', type: 'text', visible: false },
    {
      def: 'date_of_birth',
      label: 'Date of Birth',
      type: 'date',
      visible: false,
    },
    { def: 'actions', label: 'Actions', type: 'actionBtn', visible: true },
  ];

  dataSource = new MatTableDataSource<Staff>([]);
  selection = new SelectionModel<Staff>(true, []);
  contextMenuPosition = { x: '0px', y: '0px' };
  isLoading = true;
  private destroy$ = new Subject<void>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('filter') filter!: ElementRef;
  @ViewChild(MatMenuTrigger) contextMenu?: MatMenuTrigger;

  breadscrums = [
    {
      title: 'All Staff',
      items: ['Staff'],
      active: 'All Staff',
    },
  ];

  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public staffService: StaffService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  refresh() {
    this.loadData();
  }

  getDisplayedColumns(): string[] {
    return this.columnDefinitions
      .filter((cd) => cd.visible)
      .map((cd) => cd.def);
  }

  loadData() {
    this.staffService.getAllStaff().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.isLoading = false;
        this.refreshTable();
        this.dataSource.filterPredicate = (data: Staff, filter: string) =>
          Object.values(data).some((value) =>
            value.toString().toLowerCase().includes(filter)
          );
      },
      error: (err) => console.error(err),
    });
  }

  private refreshTable() {
    this.paginator.pageIndex = 0;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filter = filterValue;
  }

  addNew() {
    this.openDialog('add');
  }

  editCall(row: Staff) {
    this.openDialog('edit', row);
  }

  openDialog(action: 'add' | 'edit', data?: Staff) {
    let varDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      varDirection = 'rtl';
    } else {
      varDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(AllStaffFormComponent, {
      width: '60vw',
      maxWidth: '100vw',
      data: { staff: data, action },
      direction: varDirection,
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (action === 'add') {
          this.dataSource.data = [result, ...this.dataSource.data];
        } else {
          this.updateRecord(result);
        }
        this.refreshTable();
        this.showNotification(
          action === 'add' ? 'snackbar-success' : 'black',
          `${action === 'add' ? 'Add' : 'Edit'} Record Successfully...!!!`,
          'bottom',
          'center'
        );
      }
    });
  }

  private updateRecord(updatedRecord: Staff) {
    const index = this.dataSource.data.findIndex(
      (record) => record.id === updatedRecord.id
    );
    if (index !== -1) {
      this.dataSource.data[index] = updatedRecord;
      this.dataSource._updateChangeSubscription();
    }
  }

  deleteItem(row: Staff) {
    const dialogRef = this.dialog.open(AllStaffDeleteComponent, {
      data: row,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.data = this.dataSource.data.filter(
          (record) => record.id !== row.id
        );
        this.refreshTable();
        this.showNotification(
          'snackbar-danger',
          'Delete Record Successfully...!!!',
          'bottom',
          'center'
        );
      }
    });
  }

  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  exportExcel() {
    const exportData = this.dataSource.filteredData.map((x) => ({
      ID: x.id,
      Name: x.name,
      Email: x.email,
      Address: x.address,
      Mobile: x.mobile,
      Department: x.department,
      Status: x.status,
      'Joining Date': x.joining_date,
      Salary: x.salary,
      Experience: x.experience,
      Role: x.role,
      'Date of Birth': x.date_of_birth,
      Gender: x.gender,
    }));

    TableExportUtil.exportToExcel(exportData, 'employee_export');
  }

  isAllSelected() {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    this.dataSource.data = this.dataSource.data.filter(
      (item) => !this.selection.selected.includes(item)
    );
    this.selection.clear();
    this.showNotification(
      'snackbar-danger',
      `${totalSelect} Record(s) Deleted Successfully...!!!`,
      'bottom',
      'center'
    );
  }
  onContextMenu(event: MouseEvent, item: Staff) {
    event.preventDefault();
    this.contextMenuPosition = {
      x: `${event.clientX}px`,
      y: `${event.clientY}px`,
    };
    if (this.contextMenu) {
      this.contextMenu.menuData = { item };
      this.contextMenu.menu?.focusFirstItem('mouse');
      this.contextMenu.openMenu();
    }
  }

}
