import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function Restreview(review) {
 
  const [open, setOpen] = useState(false);
     console.log(review);
    return (
      <>
        <Button
          variant="dark"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Reviews
        </Button>
        {/* <Collapse in={open}>
          <div id="example-collapse-text">
            {
              review.map(item => (
              <>
                <p>{item.name} <span>{item.date}</span></p>
                <h6>comment :{item.comments}</h6> 
              </>
              ))
            }
          </div>
        </Collapse> */}
      </>
    )
}

export default Restreview;
