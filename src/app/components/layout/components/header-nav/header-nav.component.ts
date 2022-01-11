import { Component, Input, OnInit } from '@angular/core';
import { ThisAppModulesModel } from '../../models/this-app-modules.model';
import { IModuleModel } from '../../models/user-check-response.model';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent implements OnInit {
  public headerNavModules: IModuleModel[];
  public popupModules: IModuleModel[];
  public allModules: IModuleModel[];
  private screenWidth: number;
  public thisAppModules: ThisAppModulesModel = new ThisAppModulesModel();
  @Input() set modules(modules: IModuleModel[]) {
    this.allModules = modules;

    if (modules.length > 0) {
      this.headerNavModules = this.getHeaderModules(modules);
      this.popupModules = this.getPopupModules(modules);
    }
  }
  constructor() {
    this.screenWidth = screen.width;
  }

  ngOnInit(): void {}

  public checkThisAppModules(moduleUrl: string): boolean {
    switch (moduleUrl) {
      case this.thisAppModules.main:
        return false;
      case this.thisAppModules.about:
        return false;
      case this.thisAppModules.report:
        return false;
      case this.thisAppModules.board:
        return false;
      case this.thisAppModules.support:
        return false;
        case this.thisAppModules.studentPlan:
        return false;
    }
    return true;
  }

  private getHeaderModules(modules: IModuleModel[]): IModuleModel[] {
    let headerNavModules: IModuleModel[] = [];

    if (screen.width >= 1920 && screen.width > 1366) {
      headerNavModules = modules.slice(0, 6);
    }
    if (screen.width < 1920) {
      headerNavModules = modules.slice(0, 4);
    }
    return headerNavModules;
  }

  private getPopupModules(modules: IModuleModel[]): IModuleModel[] {
    let headerNavModulesLength = this.headerNavModules.length;
    let filteredPopupModules = modules.slice(headerNavModulesLength);
    // const filteredPopupModules = modules.filter(
    //   (module) =>
    //     module.name.en != 'Main page' &&
    //     module.name.az != 'Dəstək' &&
    //     module.name.en != 'Haqqında'
    // );
    return filteredPopupModules;
  }
}
