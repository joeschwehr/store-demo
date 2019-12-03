import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

function Directory({sections, history}) {
  return (
      <div className="directory-menu">
          {sections.map(item => {
              return <MenuItem {...item} key={item.id} onClick={() => history.push(item.linkUrl)}/>
          })}
      </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
