import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Image, Segment } from "semantic-ui-react";

export default function NotFound() {
    return (
        <Segment placeholder> 
        <Image src='/assets/404.png' size='medium' centered/>
            <Header icon>
                Oops - this page seems to be from another universe.
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities' inverted color='violet'>
                    Return to activities page
                </Button>
            </Segment.Inline>
        </Segment>
    )
}