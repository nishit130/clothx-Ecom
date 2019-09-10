import React from 'react'
import Heading from '../reuse/heading'
import { Link } from "gatsby"

export default function dualinfo({title}) {
    return (
    <div className="dualinfo">
        <div className="container">
            <Heading heading={title}/>
            <div className="row">
                <div className="col-sm-8">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta nisi maiores voluptatum dolores cupiditate doloremque magnam quae necessitatibus recusandae. Corrupti illo doloremque, sint nostrum hic voluptatem dolor rerum exercitationem quia in assumenda praesentium delectus tenetur ea aliquam, earum vel, at odio quo dolorem distinctio ipsam officia error fugit? A voluptatum voluptate veritatis perferendis, aut earum itaque alias provident tempora, deleniti quos debitis aliquam beatae facere omnis voluptas modi mollitia. Quisquam mollitia blanditiis quaerat fugit nesciunt minus temporibus quia dolor unde natus? Tempora porro explicabo, atque laudantium eaque debitis? Praesentium totam magnam veniam possimus sunt beatae nemo nihil pariatur velit veritatis. adipisicing elit. Nesciunt at ducimus porro deserunt, animi recusandae aliquam, similique maiores provident debitis mollitia ad quisquam sit! Perferendis animi in molestias adipisci fugiat, quae accusantium aut veritatis sint qui tenetur quidem optio corporis consequatur, ut sunt. Dolorum asperiores est cupiditate iure pariatur, debitis soluta expedita earum hic, aperiam sit ex dolore odio, aliquid excepturi fugit facilis amet natus aspernatur neque quidem? Consequuntur, velit culpa voluptatibus quidem sed sunt veritatis alias tenetur nihil ad debitis enim quas consectetur natus maiores dolorum amet aliquid dolorem esse ab illum praesentium eos ipsam accusantium! Blanditiis, id vitae.
                    </p>
                </div>
                <div className="col-sm-4">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
                </div>
            </div>
        </div>
    </div>
    )
}
