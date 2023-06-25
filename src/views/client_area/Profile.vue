<template>
  <div class="profile">
    <div class="dashboard-form mb-4">
      <h4 class="gray">Profile Details</h4>
      <div class="flex justify-content-center">
        <form @submit.prevent class="p-fluid">
          <div class="field">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-user"></i>
              <InputText id="first_name" />
              <label for="first_name">
                {{ $t('enter your first name') }}
              </label>
            </div>
          </div>
          <div class="field">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-user"></i>
              <InputText id="last_name" />
              <label for="last_name">
                {{ $t('enter your last name') }}
              </label>
            </div>
          </div>
          <div class="field">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-envelope" />
              <InputText id="email" aria-describedby="email-error" />
              <label for="email">
                {{ $t('enter your email address') }}
              </label>
            </div>
          </div>
          <div class="field">
            <div class="p-float-label p-input-icon-right">
              <i class="pi pi-phone" />
              <InputNumber
                :useGrouping="false"
                id="phone"
                aria-describedby="email-error"
              />
              <label for="phone">
                {{ $t('enter your phone number') }}
              </label>
            </div>
          </div>
          <!-- <div class="field">
            <div class="p-float-label">
              <Password id="password" toggleMask>
                <template #header>
                  <h6>Pick a password</h6>
                </template>
                <template #footer="sp">
                  {{ sp.level }}
                  <Divider />
                  <p class="mt-2">Suggestions</p>
                  <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5;">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                  </ul>
                </template>
              </Password>
              <label for="password">
                {{ $t('enter password') }}
              </label>
            </div>
            <small
              v-if="
                (v$.password.$invalid && submitted) ||
                v$.password.$pending.$response
              "
              class="p-error"
            >
              {{ v$.password.required.$message.replace('Value', 'Password') }}
            </small>
          </div>
          <div class="field">
            <div class="p-float-label">
              <Password
                id="password"
                v-model="v$.cPassword.$model"
                :class="{ 'p-invalid': v$.cPassword.$invalid && submitted }"
                toggleMask
                :feedback="false"
              ></Password>
              <label
                for="password"
                :class="{ 'p-error': v$.cPassword.$invalid && submitted }"
              >
                {{ $t('enter confirm password') }}
              </label>
            </div>

            <div
              v-if="
                (v$.cPassword.$invalid && submitted) ||
                v$.cPassword.$pending.$response
              "
            >
              <small v-if="v$.password.required" class="p-error">
                {{ v$.password.required.$message.replace('Value', 'Password') }}
              </small>
              <br />
              <small
                v-if="v$.cPassword.sameAsPassword?.$message"
                class="p-error"
              >
                {{
                  v$.cPassword.sameAsPassword.$message.replace(
                    'value',
                    'cPassword',
                  )
                }}
              </small>
            </div>
          </div>
          <div class="field">
            <textarea
              id="textarea-plaintext"
              :value="tearm"
              rows="4"
              cols="30"
              disabled
            ></textarea>
          </div>
          <div class="field-checkbox">
            <Checkbox
              id="accept"
              name="accept"
              value="Accept"
              v-model="v$.tearm.$model"
              :class="{ 'p-invalid': v$.tearm.$invalid && submitted }"
            />
            <label
              for="accept"
              class="ms-1 mb-0"
              :class="{ 'p-error': v$.tearm.$invalid && submitted }"
            >
              {{ $t('I agree to the terms and conditions') }}*
            </label>
          </div> -->
          <Button type="submit" label="Submit" class="mt-4 mainButton" />
        </form>
      </div>
      <div class="row">
        <!-- <div class="col-lg-6 col-md-6 col-xs-12 padding-right-30">
          <div class="dashboard-list">
            <div class="dashboard-list-static">
              <div class="edit-profile-photo">
                <img src="images/user-avatar.jpg" alt="" />
                <div class="change-photo-btn">
                  <div class="photoUpload">
                    <span>
                      <i class="fa fa-upload"></i>
                      Upload Photo
                    </span>
                    <input type="file" class="upload" />
                  </div>
                </div>
              </div>

              <div class="my-profile">
                <div class="form-group">
                  <label>Your Name *</label>
                  <input value="Tom Perrin" type="text" />
                </div>
                <div class="form-group">
                  <label>Phone Number *</label>
                  <input value="(123) 123-456" type="text" />
                </div>
                <div class="form-group">
                  <label>Email Address *</label>
                  <input value="tom@example.com" type="text" />
                </div>
                <div class="form-group">
                  <label>Your Bio *</label>
                  <textarea name="notes" id="notes" cols="30" rows="10">
Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</textarea
                  >
                </div>
                <div class="form-group">
                  <label class="twitter-input">
                    <i class="fab fa-twitter"></i>
                    Twitter
                  </label>
                  <input placeholder="https://www.twitter.com/" type="text" />
                </div>
                <div class="form-group">
                  <label class="fb-input">
                    <i class="fab fa-facebook"></i>
                    Facebook
                  </label>
                  <input placeholder="https://www.facebook.com/" type="text" />
                </div>
              </div>
              <div class="form-btn">
                <a href="#" class="nir-btn">SAVE CHANGE</a>
              </div>
            </div>
          </div>
        </div> -->

        <!-- <div class="col-lg-6 col-md-6 col-xs-12 padding-left-30">
          <div class="dashboard-list margin-top-0">
            <h4 class="gray">Your Address</h4>
            <div class="dashboard-list-static">
              <div class="my-profile">
                <div class="form-group">
                  <label>Company Name</label>
                  <input type="text" />
                </div>
                <div class="form-group">
                  <label>Address *</label>
                  <input type="text" />
                </div>
                <div class="form-group">
                  <label>Zip Code *</label>
                  <input type="text" />
                </div>
                <div class="form-group">
                  <label>Country *</label>
                  <input type="text" />
                </div>
                <div class="form-group">
                  <label>City *</label>
                  <input type="text" />
                </div>
                <div class="form-group">
                  <label>Region/State *</label>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <!-- <div class="dashboard-form mb-4">
      <div class="dashboard-location">
        <h4>Location</h4>
        <form>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label>Home Airport</label>
                <input type="text" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label>Address</label>
                <input type="email" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label>City</label>
                <input type="text" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label>State/Province/Region</label>
                <input type="text" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label>ZIP Code/Postal Code</label>
                <input type="text" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label>Country</label>
                <input type="text" />
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form-btn">
                <a href="#" class="nir-btn">SAVE CHANGE</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div> -->
    <!-- <div class="dashboard-form mb-4">
      <div class="dashboard-password">
        <h4>Change Password</h4>
        <form>
          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div class="form-group">
                <label>Current Password</label>
                <input type="password" placeholder="*********" />
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div class="form-group">
                <label>New Password</label>
                <input type="password" />
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div class="form-group">
                <label>Re-enter Password</label>
                <input type="password" />
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form-btn mar-top-15">
                <a href="#" class="nir-btn">SAVE CHANGE</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="dashboard-form mb-4">
      <div class="dashboard-password">
        <h4>Currency</h4>
        <form>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="form-group currency-content">
                <label>Primary Curreny</label>
                <select>
                  <option>USD</option>
                  <option>USD</option>
                  <option>USD</option>
                  <option>USD</option>
                </select>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="form-group currency-content">
                <label>Tax(%)</label>
                <input type="text" placeholder="15" />
              </div>
            </div>
            <div class="col-lg-12">
              <div class="currency-content">
                <p class="bold">Send Enrique Mail</p>
                <input type="checkbox" />
                Admin &amp; Customer
                <br />
                <input type="checkbox" />
                Partner &amp; Customer
                <br />
                <input type="checkbox" />
                Admin, Partner &amp; Customer
              </div>
            </div>
            <div class="col-lg-12">
              <div class="form-btn mt-2">
                <a href="#" class="nir-btn">SAVE CHANGE</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.profile {
  background: #fff;
  padding: 10px;
  @include mainShadow();
}
.field {
  margin-top: 20px;
}
</style>
