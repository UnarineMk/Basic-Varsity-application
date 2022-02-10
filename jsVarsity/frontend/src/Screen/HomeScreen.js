import axios from 'axios';
import script from '../';
const HomeScreen = {
  after_render: async () => {},
  render: async () => {
    const response = await axios({
      url: 'http://localhost:5000/api/tertiaries',
      headers: { 'Content-Type': 'application/json' },
    });

    // if (!response || !response.statusText !== 'OK') {
    //   return `<div class="p-5"> Error Getting the Data</div>`;
    // }
    const varsitySection = response.data.slice(0, 26);
    const iieSection = response.data.slice(26, 30);

    return `
    <main class="content-container" id="main-container">
    <section class="heading-main-section">

    <div class="row main-row">
        <div class="col-md-6">
            <h1 class="main-heading"><b>Your Education, Your Life, Your School, Our Time Is Now.</b></h1>
            <p class="main-para">Deep learning. Growing faith. Real life</p>
            <button type="submit" class="main-button" id="button-scroll">Take a Look</button>

        </div>
        <div class="col-md-6">
            
        </div>
    </div>


</section>


      <h2 class="category-name" id="Uni-section">South African Universities</h2>

      <div class="container-fluid container-fluid-varsity position-relative  mb-0 ms-1  main-con">
      <div class="row mb-2 mt-3 varsity-row ms-2">
${varsitySection
  .map(
    (uni) =>
      `<div class="col col-md-2 mb-4 me-4 ms-5 p-0 varsity">
                  <div class="card shadow-sm varsity-card">
                      <div class="varsity-link">
                          <a href="#">
                              <img class="card-img-top ${uni.size} img pop ${uni.resize}" src="${uni.image} " alt="IMAGE" />
                          </a>
                      </div>
<div class="overlay">
                      <div class="card-body-varsity">
                          <p class="card-text-varsity varsity-name">${uni.name} </p>
                          <p class="card-text-varsity varsity-province">${uni.province}</p>
                          <p class="card-text-varsity varsity-summary">${uni.numberOfStudents}</p>
                          <div class="varsity-button">
                              <a href="${uni.link}">
                                  <button class="card-button-varsity">Take me there</button>
                              </a>
                          </div>
                          </div>
              </div>
              </div>

      </div>
  
`
  )
  .join('')}
  </div>
  </div>

  <div class="line"></div>

  <h2 class="category-name" id="Uni-section">South African IIE Colleges</h2>

  <div class="container-fluid container-fluid-varsity position-relative  mb-0 ms-1  main-con">
  <div class="row mb-2 mt-3 varsity-row ms-2">
${iieSection
  .map(
    (uni) =>
      `<div class="col col-md-2 mb-4 me-4 ms-5 p-0 varsity">
              <div class="card shadow-sm varsity-card">
                  <div class="varsity-link">
                      <a href="#">
                          <img class="card-img-top ${uni.size} img pop ${uni.resize}" src="${uni.image} " alt="IMAGE" />
                      </a>
                  </div>
<div class="overlay">
                  <div class="card-body-varsity">
                      <p class="card-text-varsity varsity-name">${uni.name} </p>
                      <p class="card-text-varsity varsity-province">${uni.province}</p>
                      <p class="card-text-varsity varsity-summary">${uni.numberOfStudents}</p>
                      <div class="varsity-button">
                          <a href="${uni.link}">
                              <button class="card-button-varsity">Take me there</button>
                          </a>
                      </div>
                      </div>
          </div>
          </div>

  </div>

`
  )
  .join('')}
</div>
</div>

<div class="line"></div>
  </main>




  
    
    `;
  },
};

export default HomeScreen;
