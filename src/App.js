import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div id="root"></div>
        <div id="app" class="container-fluid">
          <div class="row">
            <div class="col-2">
              <sidebar>
                <img src="theindex.svg" class="logo" />
                <section>
                  <h4 class="menu-item active">
                    <a href="#">AUTHORS</a>
                  </h4>
                </section>
              </sidebar>
            </div>
            <div class="content col-10">
              <div class="authors">
                <h3>Authors</h3>
                <div class="row">
                  <div class="col-4">
                    <a href="#" class="card">
                      <div class="image">
                        <img class="card-img-top img-fluid" src="https://nation.com.pk/digital_images/large/2015-05-10/jk-rowling-believes-in-standing-up-to-bullies-1431261222-3596.jpeg" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">
                          <span>J.K. Rowling</span>
                        </h5>
                        <small class="card-text">7 books</small>
                      </div>
                    </a>
                  </div>
                  <div class="col-4">
                    <a href="#" class="card">
                      <div class="image">
                        <img class="card-img-top img-fluid" src="https://typeset-beta.imgix.net/elite-daily/2016/03/06144207/elite-daily-George-RR-Martin.jpg?w=800&h=800&auto=format&q=70&fit=crop&crop=faces" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">
                          <span>George R.R. Martin</span>
                        </h5>
                        <small class="card-text">5 books</small>
                      </div>
                    </a>
                  </div>
                  <div class="col-4">
                    <a href="#" class="card">
                      <div class="image">
                        <img class="card-img-top img-fluid" src="https://images.8tracks.com/cover/i/010/010/920/tolkeinbigger-2362.jpg?rect=166,0,500,500&q=98&fm=jpg&fit=max" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">
                          <span>J.R.R Tolkein</span>
                        </h5>
                        <small class="card-text">6 books</small>
                      </div>
                    </a>
                  </div>
                  <div class="col-4">
                    <a href="#" class="card">
                      <div class="image">
                        <img class="card-img-top img-fluid" src="http://speakingtigerbooks.com/wp-content/uploads/2016/06/naguib-mahfouz-5.jpg" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">
                          <span>Naguib Mahfouz</span>
                        </h5>
                        <small class="card-text">8 books</small>
                      </div>
                    </a>
                  </div>
                  <div class="col-4">
                    <a href="#" class="card">
                      <div class="image">
                        <img class="card-img-top img-fluid" src="http://images.archant.co.uk/polopoly_fs/1.4811429.1481285995!/image/image.jpg_gen/derivatives/landscape_630/image.jpg" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">
                          <span>Agatha Christie</span>
                        </h5>
                        <small class="card-text">30 books</small>
                      </div>
                    </a>
                  </div>
                  <div class="col-4">
                    <a href="#" class="card">
                      <div class="image">
                        <img class="card-img-top img-fluid" src="https://pbs.twimg.com/profile_images/941508335966343169/xsxkTLe0.jpg" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">
                          <span>Jordan Peterson</span>
                        </h5>
                        <small class="card-text">2 books</small>
                      </div>
                    </a>
                  </div>
                  <div class="col-4">
                    <a href="#" class="card">
                      <div class="image">
                        <img class="card-img-top img-fluid" src="https://literature.britishcouncil.org/assets/Uploads/writers/_resampled/CroppedImage680680-Margaret-Atwood-c-Jean-Malek-web.jpg" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">
                          <span>Margaret Atwood</span>
                        </h5>
                        <small class="card-text">5 books</small>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
