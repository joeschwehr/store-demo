import React from "react";
import { Route } from "react-router-dom";
import CollectionsList from "../../components/collections-list/collections-list.component";
import CollectionPage from "../collection/collection.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils"
import { connect } from "react-redux";
import { UpdateCollections } from "../../redux/shop/shop.actions";
import  WithSpinner from "../../components/with-spinner/with-spinner.component"

const CollectionsListWithSpinner = WithSpinner(CollectionsList);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
  state = {
    loading: true
  }
  unsubscribeFromSnapShop = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      this.props.updateCollections(collectionsMap);
      this.setState({loading: false});
    })
  }

  render() {
    const {match} = this.props;
    const {loading} = this.state;
    return (
        <div className='shop-page'>
          <Route exact path={`${match.path}`} render={(props) => <CollectionsListWithSpinner isLoading={loading} {...props} />} />
          <Route path={`${match.path}/:collectionTitle`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
        </div>
      );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(UpdateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);