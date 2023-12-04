// import { viteRequire } from 'vite-require'

const FeaturedItem = (props) => {

  //Create a URL to the image for this FeaturedItem
  // console.log('import.meta.url is: ', import.meta.url);
  const imagePath = new URL(`../../assets/images/${props.itemData.image}`, import.meta.url).href;
  // console.log('imagePath is: ', imagePath);

  // console.log('FEATUREDITEM RUNNING...');
    return (
        <li>
        <div className="frame1">
          <div className="box">
            {/* <img src={require(`../../assets/images/${props.itemData.image}`)} alt="Img" height="130" width="197" /> */}
            <img src={imagePath} alt="Img" height="130" width="197" />

          </div>
        </div>
        <p>
          <b>{props.itemData.title}</b> {props.itemData.description}
        </p>
        <a href={props.itemData.link} className="more">
          Read More
        </a>
      </li>
    );
}

export default FeaturedItem;