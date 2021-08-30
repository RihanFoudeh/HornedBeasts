import React from 'react';
import HornedBeasts from './HornedBeasts';
import allofhornedBeasts from './data.json';

class Main extends React.Component {

  render() {
    return (
      <main>
       

{
    allofhornedBeasts.map((allthink) => {
        return (
            <HornedBeasts
                imageUrl={allthink.image_url}
                title={allthink.title}
                description={allthink.description}
                keyword={allthink.keyword}
                horns = {allthink.horns}
            />
        )
    })
}



        {/* <HornedBeasts
          title="Rhino Family"
          imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
          description="A unicorn and a narwhal nuzzling their horns"
        />

        <HornedBeasts
          title="Unicorn Head"
          imageUrl="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
          description="A unicorn and a narwhal nuzzling their horns"
        /> */}

      </main>
    )
  }
}

export default Main;