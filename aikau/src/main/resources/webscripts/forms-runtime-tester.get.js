model.jsonModel = {
   services: [
      {
            name: "alfresco/services/LoggingService",
            config: {
               loggingPreferences: {
                  enabled: true,
                  all: true
               }
            }
      },
      "alfresco/services/FormsRuntimeService",
      "alfresco/services/CrudService",
      "alfresco/services/NotificationService"
   ],
   widgets: [
      {
         name: "alfresco/layout/TitleDescriptionAndContent",
         config: {
            title: "Aikau Forms Support",
            description: "This page showcases the work being done to interpret Forms Runtime XML configuration into Aikau forms",
            widgets: [
               {
                  name: "alfresco/layout/HorizontalWidgets",
                  config: {
                     widgets: [
                        {
                           name: "alfresco/layout/ClassicWindow",
                           config: {
                              title: "Form Details",
                              widgets: [
                                 {
                                    name: "alfresco/forms/Form",
                                    config: {
                                       okButtonPublishGlobal: true,
                                       okButtonPublishTopic: "ALF_FORM_REQUEST",
                                       okButtonButtonLabel: "Get Form",
                                       showCancelButton: false,
                                       widgets: [
                                          {
                                             name: "alfresco/forms/controls/TextBox",
                                             config: {
                                                additionalCssClasses: "long",
                                                name: "itemId",
                                                label: "Item ID",
                                                requirementConfig: {
                                                   initialValue: true
                                                }
                                             }
                                          },
                                          {
                                             name: "alfresco/forms/controls/Select",
                                             config: {
                                                name: "itemKind",
                                                label: "Item Kind",
                                                optionsConfig: {
                                                   fixed: [
                                                      {
                                                         label: "Node", value: "node"
                                                      }
                                                   ]
                                                }
                                             }
                                          },
                                          {
                                             name: "alfresco/forms/controls/Select",
                                             config: {
                                                name: "mode",
                                                label: "Mode",
                                                optionsConfig: {
                                                   fixed: [
                                                      {
                                                         label: "Edit", value: "edit"
                                                      },
                                                      {
                                                         label: "View", value: "view"
                                                      }
                                                   ]
                                                }
                                             }
                                          },
                                          {
                                             name: "alfresco/forms/controls/TextBox",
                                             config: {
                                                name: "formId",
                                                label: "Form ID"
                                             }
                                          },
                                          
                                       ]
                                    }
                                 }
                              ]
                           }
                        },
                         {
                           name: "alfresco/layout/ClassicWindow",
                           config: {
                              title: "Form Output",
                              widgets: [
                                 {
                                    name: "alfresco/layout/DynamicWidgets",
                                    config: {
                                       subscriptionTopic: "ALF_FORM_REQUEST_SUCCESS"
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               }
            ]
         }
      },
      {
         name: "alfresco/logging/DebugLog"
      }
   ]
};