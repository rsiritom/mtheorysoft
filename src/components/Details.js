import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import MobileStoreButton from 'react-mobile-store-button';


export default class Details extends Component {
    render() {

        return (
            <ProductConsumer>
                {value => {
                    const { company, img, url, urlios, privacyurl, info, price, title } =
                        value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*end title*/}
                            {/*product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <a href={url} target="_blank" rel="noopener noreferrer"> <img src={img} className="img-fluid" alt="product" /></a>

                                </div>
                                {/*product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>App name: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted
                                    mt-3 mb-2">
                                        Developer: <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price : <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Description:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/productlist">
                                            <ButtonContainer>
                                                volver
                                            </ButtonContainer>
                                        </Link>

                                        <MobileStoreButton
                                            store="android"
                                            url={url}
                                            width="150px"
                                            height="50px"
                                            linkProps={{ title: 'iOS Store Button' }}
                                        />
                                        <MobileStoreButton
                                            store="ios"
                                            url={urlios}
                                            width="120px"
                                            height="40px"
                                            linkProps={{ title: 'iOS Store Button' }}
                                        />
                                    </div>
                                    <div>

                                        <a href={privacyurl} target="_blank" rel="noopener noreferrer"> Política de privacidad </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    )
                }}
            </ProductConsumer>
        );
    }
}