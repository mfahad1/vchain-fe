import React from "react";
import {
  observer
} from "mobx-react";
import {
  observable,
  computed
} from "mobx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField';
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import avatar from "assets/img/faces/marc.jpg";
import IntegrationReactSelect from "./react-autoSuggest";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from "assets/img/logo.png";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

@observer
class FormRegister extends React.Component {
  // @observable customer = {
  //   name: '',
  //   email: '',
  //   contactNumber: '',
  //   address: ''
  // };

  // @observable bag = {
  //   quantity: 0,
  //   weight: [],
  // };

  // @observable bagInfo = {
  //   items: [],
  //   supplies: [],
  //   deliveryType: [],
  //   surgeCharges: 0,
  //   discount: 0,
  //   paymentMethod: [],
  //   status: [],
  //   deliveryDate: '',
  //   customerComments:''
  // }

  // @observable toggleNewCustomer = false;

  constructor(props) {
    super(props);
  }



  renderVolunteerForm(classes) {
    return (
      <CardBody>
        <Grid container>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Volunteers Required?</h4>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    id="name"
                    label="Number of Volunteers"
                    className={classes.textField}
                    margin="normal"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    id="name"
                    label="Number of Hours"
                    className={classes.textField}
                    margin="normal"
                  />
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </Grid>
      </CardBody>
    );
  }

  renderActivityForm(classes) {
    return (
      <CardBody>
        <Grid container>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Description of Activity</h4>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    id="name"
                    label="Number of Volunteers"
                    className={classes.textField}
                    margin="normal"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    id="name"
                    label="District"
                    className={classes.textField}
                    margin="normal"
                  />
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </Grid>
      </CardBody>
    );
  }
  renderSchoolForm(classes) {
    return (
      <CardBody>
        <Grid container>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Description of School</h4>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    id="name"
                    label="Number of Volunteers"
                    className={classes.textField}
                    margin="normal"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    id="name"
                    label="District"
                    className={classes.textField}
                    margin="normal"
                  />
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </Grid>
      </CardBody>
    );
  }

  render() {
    const { classes } = this.props;
     return (
        <Grid>
          <AppBar position="static" >
           <Toolbar style={{    display: 'flex',
            justifyContent: 'center', background: '#00acc1'}}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img src={logo} alt="..." style={{ width: '15%',
                  padding: '2%'
                }} />
                <h3 style={{ color: 'black', fontWeight: '700'}}>
                  VChain
                </h3>
              </div>
            </Toolbar>
          </AppBar>
          <GridItem>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Please Provide Detail of Your Activity</h4>
              </CardHeader>
             {this.renderVolunteerForm(classes)}
             {this.renderActivityForm(classes)}
             {this.renderSchoolForm(classes)}
            </Card>
          </GridItem>

       </Grid>
    );
  }

}

export default withStyles(styles)(FormRegister);
