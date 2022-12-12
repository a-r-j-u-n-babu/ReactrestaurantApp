import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Footer() {
  return (
    <div>
 
      <Card className="text-center">
        <Card.Header>ABOUT</Card.Header>
        <Card.Body>
          <Card.Title>Special </Card.Title>
          <Card.Text>
            Tonico Café, the international coffee home chain, flavors you
            with exotic coffee varieties from around the world. Unseen coffee
            varieties with their rich savor and the Café’s unique ambience make
            Tonico Cafe a premium spot of coffee lovers who come not only to
            refresh their taste buds but also to enjoy time at this exotic
            coffee world..
          </Card.Text>
          <Button variant="primary">
         QUICK LINKS
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          CHALAKKUDY - ANGAMALYNear Muringoor Signal, Angamaly-Chalakkudy
          NHOpening Time : Monday to Sunday - 11:00 AM - 02:00 AM
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Footer