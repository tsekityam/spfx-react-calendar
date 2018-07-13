import * as React from "react";
import styles from "./Calendar.module.scss";
import { ICalendarProps } from "./ICalendarProps";
import { escape } from "@microsoft/sp-lodash-subset";
import * as moment from "moment";
import BigCalendar from "react-big-calendar";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

export default class Calendar extends React.Component<ICalendarProps, {}> {
  public render(): React.ReactElement<ICalendarProps> {
    return (
      <div>
        <BigCalendar />
      </div>
    );
  }
}
