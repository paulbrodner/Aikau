model.jsonModel = {
   publishOnReady: [
      {
         publishTopic: "RETRIEVE_ACTIVITY"
      }
   ],
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
      "aikauTesting/mockservices/ActivitySummaryMockService"
   ],
   widgets: [
      {
         name: "alfresco/buttons/AlfButton",
         config: {
            label: "Retrieve activity",
            publishTopic: "RETRIEVE_ACTIVITY"
         }
      },
      {
         name: "alfresco/lists/views/AlfListView",
         config: {
            documentSubscriptionTopic: "ACTIVITY_RETRIEVED",
            itemsProperty: "activities",
            widgets: [
               {
                  name: "alfresco/lists/views/layouts/Row",
                  config: {
                     widgets: [
                        {
                           name: "alfresco/lists/views/layouts/Cell",
                           config: {
                              widgets: [
                                 {
                                    name: "alfresco/renderers/ActivitySummary",
                                    config: {
                                       propertyToRender: "activitySummary"
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