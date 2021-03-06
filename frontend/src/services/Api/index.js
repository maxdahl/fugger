/* eslint-disable no-constructor-return */

import CategoryApi from "./categories";
import SubcategoryApi from "./subcategories";
import DatevApi from "./datevAccounts";
import TransferApi from "./transfers";
import BudgetApi from "./budgets";
import UserApi from "./users";
import AuthApi from "./auth";
import UploadApi from "./uploads";
import AnalysisApi from "./analysis";

class Api {
  constructor() {
    if (Api.instance) return Api.instance;

    Api.instance = this;
    this.categories = new CategoryApi();
    this.subcategories = new SubcategoryApi();
    this.datevAccounts = new DatevApi();
    this.transfers = new TransferApi();
    this.budgets = new BudgetApi();
    this.users = new UserApi();
    this.auth = new AuthApi();
    this.uploads = new UploadApi();
    this.analysis = new AnalysisApi();
  }
}

export default new Api();
