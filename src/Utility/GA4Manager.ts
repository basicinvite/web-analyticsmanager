import { ManagerConfigInterface } from "../Configuration/Interfaces/ManagerConfig.Interface";
import { ManagerConfig } from "../Configuration/ManagerConfig";
import GA4Event from "../Objects/GA4Event";
import { AnalyticsEventDataInterface } from "../Objects/Interfaces/AnalyticsEventData.Interface";
import { ManagerInterface } from "./Interfaces/Manager.Interface";

export class GA4Manager implements ManagerInterface {
  managerConfig: ManagerConfigInterface = {trackingId: ''};
  initialized: boolean = false;

  private GA4EventTypes = {
    conversion: ['transaction_id', 'value', 'currency', 'items'],
    purchase: ['transaction_id', 'value', 'currency', 'items'],
    view_item: ['currency', 'value', 'items'],
    view_item_list: ['items'],
    login: []
  }

  private GA4ErrorMsg = {
    initializationError: "GA4 Manager has not been initialized. Please initialize with the appropriate data."
  }

  constructor() {}

  private _logError(error:string):void {
    if(error) {
      console.error(error);
    }
  }

  private _getBodyElement():any {
    return document.querySelector("body");
  }

  addTrackingCode(trackingHtml: string): void {
    if(this.initialized) {
      let script = document.createElement('script');
      script.append(trackingHtml);
      
      let body = this._getBodyElement();
      if(body) {
        body.appendChild(script);
      }
    }   
  }

  getTrackingCodeHTML():string {

    let trackingNode = '';
    if(this.initialized) {
      trackingNode = `window.dataLayer = window.dataLayer || [];
      <script async src="https://www.googletagmanager.com/gtag/js?id=${this.managerConfig.trackingId}"></script>
      function ga4() {
        dataLayer.push(arguments);
      }

      ga4('js', new Date());
      ga4('config', ${this.managerConfig.trackingId})
    `;
    } else {
      this._logError(this.GA4ErrorMsg.initializationError);
    }
    return trackingNode;
  }

  private _setupConfig(data: ManagerConfigInterface) {
    this.managerConfig = new ManagerConfig(data);
    this.initialized = false;
  }

  init(data: ManagerConfigInterface): void {

    if(!this.initialized) {
      this._setupConfig(data);
      const trackingHtml = this.getTrackingCodeHTML();
  
      if(trackingHtml) {
        this.addTrackingCode(trackingHtml);
      }
    }
  }

  private _checkDefaultEvent(type: string): any {
    let eventType: keyof typeof this.GA4EventTypes;
    let result = null;
      for (eventType in this.GA4EventTypes) {
        if(eventType === type) {
          result = this.GA4EventTypes[eventType]; 
          break;
        }
      }
      return result;
  }

  fireTrackingEvent(data: AnalyticsEventDataInterface) {
    if(data.eventType && data.eventPayload) {
      const required = this._checkDefaultEvent(data.eventType);
      if(required) {
        const event = new GA4Event(data, required);
        event.fire();
      } else {
        const event = new GA4Event(data);
        event.fire();
      }
    }
    
  }
}
