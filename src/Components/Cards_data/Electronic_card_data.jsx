import { Rate } from "antd";
import image1 from "../../image/image1.png";
import image2 from "../../image/image2.png";
import image3 from "../../image/image3.webp";
import image4 from "../../image/image4.png";
import image5 from "../../image/image5.png";
import image6 from "../../image/image6.png";
import image7 from "../../image/image7.png";
import image8 from "../../image/image8.png";
import image9 from "../../image/image9.png";
import image10 from "../../image/image10.png";
import image11 from "../../image/image11.png";
import image12 from "../../image/image12.webp";

const Electronic_card_data = [
  {
    image: image1,
    cat_name: "Grocery",
    price: 3000,
    rateing: <Rate allowHalf  disabled defaultValue={3} />,
    discount:40
  },
  {
    image: image2,

    cat_name: "Mobiles",
    price: 2500,
    rateing: <Rate allowHalf disabled defaultValue={3} />,
    discount:50
  },
  {
    image: image3,

    cat_name: "Fashion",
    price: 4000,
    rateing: <Rate allowHalf disabled defaultValue={1.5} />,
    discount:80
  },
  {
    image: image4,

    cat_name: "Electronics",
    price: 3500,
    rateing: <Rate allowHalf disabled defaultValue={2.5} />,
    discount:60
  },
  {
    image: image5,

    cat_name: "Home",
    price: 2100,
    rateing: <Rate allowHalf disabled defaultValue={4} />,
    discount:55
  },
  {
    image: image6,

    cat_name: "Application",
    price: 1500,
    rateing: <Rate allowHalf disabled defaultValue={4.5} />,
    discount:30
  },
  {
    image: image7,

    cat_name: "Application",
    price: 3000,
    rateing: <Rate allowHalf disabled defaultValue={3} />,
    discount:40
  },
  {
    image: image8,

    cat_name: "Fashion",
    price: 5000,
    rateing: <Rate allowHalf disabled defaultValue={5.5} />,
    discount:75
  },
  {
    image: image9,

    cat_name: "Fashion",
    price: 6000,
    rateing: <Rate allowHalf disabled defaultValue={2.5} />,
    discount:40
  },
  {
    image: image10,

    cat_name: "Fashion",
    price: 3300,
    rateing: <Rate allowHalf disabled defaultValue={3} />,
    discount:60
  },
  {
    image: image11,

    cat_name: "Application",
    price: 2000,
    rateing: <Rate allowHalf disabled defaultValue={4} />,
    discount:40
  },
  {
    image: image12,

    cat_name: "Application",
    price: 4400,
    rateing: <Rate allowHalf disabled defaultValue={3.5} />,
    discount:80
  },
];

export default Electronic_card_data;
