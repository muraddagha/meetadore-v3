'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">meetdore documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutModule.html" data-type="entity-link" >AboutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutModule-39eb5f7bdc50fd566321869d44e53085"' : 'data-target="#xs-components-links-module-AboutModule-39eb5f7bdc50fd566321869d44e53085"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutModule-39eb5f7bdc50fd566321869d44e53085"' :
                                            'id="xs-components-links-module-AboutModule-39eb5f7bdc50fd566321869d44e53085"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AboutGeneralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutGeneralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AboutTermsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutTermsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AboutVersionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutVersionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutRoutingModule.html" data-type="entity-link" >AboutRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-96014027a042e8f9194a3c91a9785d18"' : 'data-target="#xs-components-links-module-AppModule-96014027a042e8f9194a3c91a9785d18"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-96014027a042e8f9194a3c91a9785d18"' :
                                            'id="xs-components-links-module-AppModule-96014027a042e8f9194a3c91a9785d18"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BoardModule.html" data-type="entity-link" >BoardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BoardModule-8f91f7c9da3a1a54ca0b4e082394d0ab"' : 'data-target="#xs-components-links-module-BoardModule-8f91f7c9da3a1a54ca0b4e082394d0ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BoardModule-8f91f7c9da3a1a54ca0b4e082394d0ab"' :
                                            'id="xs-components-links-module-BoardModule-8f91f7c9da3a1a54ca0b4e082394d0ab"' }>
                                            <li class="link">
                                                <a href="components/BoardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoardCurrentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardCurrentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoardDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoardPastComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardPastComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoardQuestionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardQuestionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BoardRoutingModule.html" data-type="entity-link" >BoardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-45a93c21d5f61beadf382691d7fc791f"' : 'data-target="#xs-components-links-module-ComponentsModule-45a93c21d5f61beadf382691d7fc791f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-45a93c21d5f61beadf382691d7fc791f"' :
                                            'id="xs-components-links-module-ComponentsModule-45a93c21d5f61beadf382691d7fc791f"' }>
                                            <li class="link">
                                                <a href="components/BannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfrimDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfrimDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModuleContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModuleContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PieChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PieChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-7631f6717051e3522f054042a31b133e"' : 'data-target="#xs-components-links-module-LayoutModule-7631f6717051e3522f054042a31b133e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-7631f6717051e3522f054042a31b133e"' :
                                            'id="xs-components-links-module-LayoutModule-7631f6717051e3522f054042a31b133e"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderNotificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderNotificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderUserNotificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderUserNotificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModulesModule.html" data-type="entity-link" >ModulesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModulesModule-2b3d36012aa9239c22c0fa50f6dfd32f"' : 'data-target="#xs-components-links-module-ModulesModule-2b3d36012aa9239c22c0fa50f6dfd32f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModulesModule-2b3d36012aa9239c22c0fa50f6dfd32f"' :
                                            'id="xs-components-links-module-ModulesModule-2b3d36012aa9239c22c0fa50f6dfd32f"' }>
                                            <li class="link">
                                                <a href="components/ModulesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModulesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModulesRoutingModule.html" data-type="entity-link" >ModulesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link" >ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReportModule.html" data-type="entity-link" >ReportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReportModule-3cc225a046cffca3bc83fed32debf990"' : 'data-target="#xs-components-links-module-ReportModule-3cc225a046cffca3bc83fed32debf990"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReportModule-3cc225a046cffca3bc83fed32debf990"' :
                                            'id="xs-components-links-module-ReportModule-3cc225a046cffca3bc83fed32debf990"' }>
                                            <li class="link">
                                                <a href="components/ReportCommonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportCommonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportPieChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportPieChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportStatisticComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportStatisticComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportRoutingModule.html" data-type="entity-link" >ReportRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SupportModule.html" data-type="entity-link" >SupportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SupportModule-b43e1b9f2cbd2d7537fec537b206ae36"' : 'data-target="#xs-components-links-module-SupportModule-b43e1b9f2cbd2d7537fec537b206ae36"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SupportModule-b43e1b9f2cbd2d7537fec537b206ae36"' :
                                            'id="xs-components-links-module-SupportModule-b43e1b9f2cbd2d7537fec537b206ae36"' }>
                                            <li class="link">
                                                <a href="components/SupportAddQuestionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupportAddQuestionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupportDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupportDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupportFaqComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupportFaqComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupportMaterialsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupportMaterialsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupportSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupportSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupportSurveyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupportSurveyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SupportRoutingModule.html" data-type="entity-link" >SupportRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/IUpdateSurveyTicketModel.html" data-type="entity-link" >IUpdateSurveyTicketModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAccountModel.html" data-type="entity-link" >UserAccountModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AboutApiService.html" data-type="entity-link" >AboutApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HeaderApiService.html" data-type="entity-link" >HeaderApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SidebarApiService.html" data-type="entity-link" >SidebarApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SupportApiService.html" data-type="entity-link" >SupportApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SupportDetailService.html" data-type="entity-link" >SupportDetailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilitiesService.html" data-type="entity-link" >UtilitiesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Account.html" data-type="entity-link" >Account</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Application.html" data-type="entity-link" >Application</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Gender.html" data-type="entity-link" >Gender</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICountModel.html" data-type="entity-link" >ICountModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFaqModel.html" data-type="entity-link" >IFaqModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMaterialModel.html" data-type="entity-link" >IMaterialModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IModuleModel.html" data-type="entity-link" >IModuleModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INotificationModel.html" data-type="entity-link" >INotificationModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IQuestionTypeModel.html" data-type="entity-link" >IQuestionTypeModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStatusModel.html" data-type="entity-link" >IStatusModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISurveyModel.html" data-type="entity-link" >ISurveyModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserAccountModel.html" data-type="entity-link" >IUserAccountModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserResponseDataModel.html" data-type="entity-link" >IUserResponseDataModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVersionModel.html" data-type="entity-link" >IVersionModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Lang.html" data-type="entity-link" >Lang</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MyAllUser.html" data-type="entity-link" >MyAllUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Name.html" data-type="entity-link" >Name</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Name2.html" data-type="entity-link" >Name2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Name3.html" data-type="entity-link" >Name3</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Name4.html" data-type="entity-link" >Name4</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Name5.html" data-type="entity-link" >Name5</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Operation.html" data-type="entity-link" >Operation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Organization.html" data-type="entity-link" >Organization</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Organization2.html" data-type="entity-link" >Organization2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role2.html" data-type="entity-link" >Role2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShortName.html" data-type="entity-link" >ShortName</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShortName2.html" data-type="entity-link" >ShortName2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Value.html" data-type="entity-link" >Value</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Value2.html" data-type="entity-link" >Value2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Value3.html" data-type="entity-link" >Value3</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Value4.html" data-type="entity-link" >Value4</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});