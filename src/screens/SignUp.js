import UserTemplate from "../templates/UserTemplate";
export default function SignUp(){
    return(
        <UserTemplate>
            <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">User FullName</label>
    <input type="email" class="form-control" id="userfullname"></input>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Address</label>
    <input type="password" class="form-control" id="address"></input>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Your Email</label>
    <input type="text" class="form-control" id="email" ></input>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Phone</label>
    <input type="text" class="form-control" id="phone" ></input>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Password</label>
    <input type="text" class="form-control" id="password"></input>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Re-Password</label>
    <input type="text" class="form-control" id="password"></input>
  </div>
  
  
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Register</button>
  </div>
</form>
        </UserTemplate>
    );
}