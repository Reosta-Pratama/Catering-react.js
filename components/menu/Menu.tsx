import DataMenu from '@/public/DataMenu'
import Link from 'next/link'
import React, {useState} from 'react'

const Menu = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = (event : any) => {
        setIsActive(current => !current);
    };

    function ClickFilter(e: { currentTarget: { classList: { add: (arg0: string) => void; }; }; }) {
        const boxes = document.querySelectorAll('.filter-item')
        boxes.forEach(box => {
            box
                .classList
                .remove('filter-active');
        })

        e.currentTarget.classList.add('filter-active')
    }

    return (
        <section id='menu' className='menu'>
            <div className="container">
                <div className="text">
                    <h3 className="subtitle">
                        Our Menu
                    </h3>

                    <h2 className="title">
                        Most Popular Food in the World
                    </h2>
                </div>

                <ul className="filter">
                    <li className='filter-item' onClick={ClickFilter} data-menu="all">
                        All Menu
                    </li>

                    <li className='filter-item' onClick={ClickFilter} data-menu="food">
                        Food
                    </li>

                    <li className='filter-item' onClick={ClickFilter} data-menu="drink">
                        Drink
                    </li>
                </ul>

                <div className="row">
                    {
                        DataMenu.map(function (item) {
                            return (
                                <div key={item.slug} className="item col-lg-6">
                                    <div className="content-menu">
                                        <div className="image">
                                            <Link href={item.slug}>
                                                <img src={item.img} alt="" className='img-fluid'/>
                                            </Link>
                                        </div>

                                        <div className="desc">
                                            <a href={item.slug}>
                                                <h3 className="name">
                                                    {item.title}
                                                    <span>Rp.{item.price}</span>
                                                </h3>
                                            </a>

                                            <p>Sed necessitatibus quam adipisci rerum dolore magnam ipsam. Eum vitae quia
                                                culpa consequatur adipisci modi.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Menu
