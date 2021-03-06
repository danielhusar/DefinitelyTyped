// Type definitions for Google Apps Script 2019-04-02
// Project: https://developers.google.com/apps-script/
// Definitions by: oshliaer <https://github.com/oshliaer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.script.d.ts" />
/// <reference path="google-apps-script.spreadsheet.d.ts" />
/// <reference path="google-apps-script.slides.d.ts" />

declare namespace GoogleAppsScript {
  /**
   * Google Apps Script Events
   * @see https://developers.google.com/apps-script/guides/triggers/events
   */
  namespace Events {
    // Internal interfaces
    interface AppsScriptEvent {
      authMode: Script.AuthMode;
      triggerUid: string;
      user: Base.User;
    }

    interface AppsScriptHttpRequestEvent {
      parameter: object;
      contextPath: string;
      contentLength: number;
      queryString: string;
      parameters: object;
    }

    interface AppsScriptHttpRequestEventPostData {
      length: number;
      type: string;
      contents: string;
      name: string;
    }

    // External interfaces
    interface SheetsOnOpen extends AppsScriptEvent {
      source: Spreadsheet.Spreadsheet;
    }

    enum SheetsOnChangeChangeType { EDIT, INSERT_ROW, INSERT_COLUMN, REMOVE_ROW, REMOVE_COLUMN, INSERT_GRID, REMOVE_GRID, FORMAT, OTHER }
    interface SheetsOnChange extends AppsScriptEvent {
      changeType: SheetsOnChangeChangeType;
    }

    interface SheetsOnEdit extends AppsScriptEvent {
      oldValue: string;
      range: Spreadsheet.Range;
      source: Spreadsheet.Spreadsheet;
      value: string;
    }

    interface SheetsOnFormSubmit extends AppsScriptEvent {
      namedValues: { [key: string]: string[]; };
      range: Spreadsheet.Range;
      values: string[];
    }

    interface DocsOnOpen extends AppsScriptEvent {
      source: Document.Document;
    }

    interface SlidesOnOpen extends AppsScriptEvent {
      source: Slides.Presentation;
    }

    interface FormsOnOpen extends AppsScriptEvent {
      source: Forms.Form;
    }

    interface FormsOnFormSubmit extends AppsScriptEvent {
      response: Forms.FormResponse;
      source: Forms.Form;
    }

    // TODO: Is there a `user` attribute?
    interface CalendarEventUpdated extends AppsScriptEvent {
      calendarId: string;
    }

    interface AddonOnInstall {
      authMode: Script.AuthMode;
    }

    // tslint:disable-next-line: no-empty-interface
    interface DoGet extends AppsScriptHttpRequestEvent {
      // TODO: no-empty-interface
    }

    interface DoPost extends AppsScriptHttpRequestEvent {
      postData: AppsScriptHttpRequestEventPostData;
    }
  }
}
