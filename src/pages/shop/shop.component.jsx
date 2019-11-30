import React from "react";
import { Route } from "react-router-dom";
import CollectionsList from "../../components/collections-list/collections-list.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsList} />
      <Route path={`${match.path}/:collectionTitle`} component={CollectionPage} />
    </div>
  );

export default ShopPage;