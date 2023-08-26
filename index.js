const universities = ["Cambridge University",
    "Harvard University",
    "University of California",
    "ETH Zurich",
    "Max Planck",
    "University of Edinberg",
    "John's Hopkins",
    "Michigan state",
    "University of Illinois",
    "Humboldt University Berlin"]

const mentors = [{
    "mentorName" : "Shubham",
    "universityName" : "Cambridge University, UK",
    "mentorImage": "<i class='fa fa-user'></i>"
},{
    "mentorName" : "Akhil",
    "universityName" : "Harvard University, US",
    "mentorImage": "<i class='fa fa-user'></i>"
},{
    "mentorName" : "Shivam",
    "universityName" : "University of California, UK",
    "mentorImage": "<i class='fa fa-user'></i>"
},{
    "mentorName" : "Hemant",
    "universityName" : "Cambridge University, UK",
    "mentorImage": "<i class='fa fa-user'></i>"
},{
    "mentorName" : "Shubham",
    "universityName" : "University of Edinberg, UK",
    "mentorImage": "<i class='fa fa-user'></i>"
},{
    "mentorName" : "Rajat",
    "universityName" : "Michigan state, UK",
    "mentorImage": "<i class='fa fa-user'></i>"
},{
    "mentorName" : "James",
    "universityName" : "John's Hopkins, UK",
    "mentorImage": "<i class='fa fa-user'></i>"
},{
    "mentorName" : "Shubham",
    "universityName" : "Cambridge University, UK",
    "mentorImage": "<i class='fa fa-user'></i>"
},{
    "mentorName" : "Shubham",
    "universityName" : "Cambridge University, UK",
    "mentorImage": "<i class='fa fa-user'></i>"
},{
    "mentorName" : "Shubham",
    "universityName" : "Cambridge University, UK",
    "mentorImage": "<i class='fa fa-user'></i>"
},{
    "mentorName" : "Shubham",
    "universityName" : "Cambridge University, UK",
    "mentorImage": "<i class='fa fa-user'></i>"
},{
    "mentorName" : "Shubham",
    "universityName" : "Cambridge University, UK",
    "mentorImage": "<i class='fa fa-user'></i>"
}]

const mentorsOrAdvisors = [{
    "mentorName" : "Dr. Omkar",
    "mentorPosition" : "Principal Project Scientist",
    "universityName" : "IIT - Madras",
    "mentorImage": "<i class='fa fa-user'></i>"
},{
    "mentorName" : "Akhil Tripathi",
    "mentorPosition" : "",
    "universityName" : "",
    "mentorImage": "<i class='fa fa-user'></i>"
},{
    "mentorName" : "Vivek Dwivedi",
    "mentorPosition" : "",
    "universityName" : "",
    "mentorImage": "<i class='fa fa-user'></i>"
}]

$(document).ready(function () {
    bindUniversities();
    bindMentors();
    bindMentorsOrAdvisors();
})

function bindUniversities() {
    const html = universities.map((item) => {
        return (
            `<div class="col-sm-12 col-md-6 col-lg-3 p-4">
                <div class="p-3 rounded-3 text-center bg-custom-gradient h-100 d-flex align-items-center justify-content-center">
                    <h4>${item}</h4>
                </div>
            </div>`
        )
    });
    console.log(html);
    $("#universities .container .row").html(html);
}

function bindMentors() {
    const html = mentors.map((item) => {
        return (
            `<div class="col-sm-12 col-md-6 col-lg-3 p-4">
                <div class="p-3 rounded-3 text-center bg-custom-gradient h-100 d-flex flex-column align-items-center justify-content-center">
                    <span class='rounded-circle m-2 border border-2 px-4 py-3 border-white bg-dark'>${item.mentorImage}</span><br/>
                    <h4>${item.mentorName}</h4>
                    <h5>${item.universityName}</h5>
                </div>
            </div>`
        )
    });
    console.log(html);
    $("#mentors .container .row").html(html);
}

function bindMentorsOrAdvisors() {
    const html = mentorsOrAdvisors.map((item) => {
        return (
            `<div class="col-sm-12 col-md-6 col-lg-4 p-4">
                <div class="p-3 rounded-3 text-center bg-custom-gradient h-100 d-flex flex-column align-items-center justify-content-center">
                    <span class='rounded-circle m-2 border border-2 px-4 py-3 border-white bg-dark'>${item.mentorImage}</span><br/>
                    <h4>${item.mentorName}</h4>
                    <h4>${item.mentorPosition}</h4>
                    <h5>${item.universityName}</h5>
                    <div class=''>
                        <button class='btn btn-outline-dark border border-2 border-dark fw-bold'>Message Him Now</button>
                    </div>
                </div>
            </div>`
        )
    });
    console.log(html);
    $("#mentorsOrAdvisors .container .row").html(html);
}