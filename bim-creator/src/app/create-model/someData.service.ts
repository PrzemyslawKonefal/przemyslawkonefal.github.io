export class  someData{
  accounts: {login:string, name:string, email:string}[] = [];

  addAccount({login:string, name:string, email:string}){
    this.accounts.push({login:string, name:string, email:string});
  }

  showAccounts(){
    console.log(this.accounts);
  }
}
