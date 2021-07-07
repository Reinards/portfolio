import BlogLayout from '../../layouts/blog-layout'
import P from "../../components/blog/p"
import Image from "next/image"

export default function Blog() {
  return (
    <BlogLayout
    metaTitle="Reinards.lv Blogs"
    title="LM Group Buve Brendinga process">

        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui velit, semper in felis sit amet, lacinia lobortis erat. Cras id ultricies sapien. Nam eu pellentesque quam. Integer gravida consequat arcu, at semper erat dictum non. Quisque bibendum nulla eget quam faucibus pretium. Curabitur vel varius eros, sit amet iaculis est. Sed bibendum fermentum turpis, ut convallis risus. Proin tincidunt leo sit amet libero laoreet vehicula. Aliquam id malesuada felis. Morbi vestibulum risus a metus venenatis vehicula.</P>
      
        <img src="https://www.lmgroup.lv/project_img/25/1.jpg"/>

        <P>Some Other text</P>

    </BlogLayout>
  )
}
