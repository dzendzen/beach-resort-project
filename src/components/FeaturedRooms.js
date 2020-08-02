import React, { Component } from "react";
import { RoomContext } from "../Context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // const value = this.context;
    // console.log(value);
    // const {  } = this.context;
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);
    return <div>featured rooms</div>;
  }
}
