import React from "react";

const Staff = () => {
  return (
    <main className="staff-content">
      <header>
        <h2 id="heading">Information for Staff</h2>
        <div className="image">
          <img
            src="/Lab.jpg"
            alt="lab at Cantor"
            width="400"
            height="200"
          />
        </div>
      </header>

      <section className="staff-info" aria-labelledby="staff-info-heading">
        <h2 id="staff-info-heading">Staff Services and Resources</h2>

        <article className="info-section" aria-labelledby="news-heading">
          <h3 id="news-heading">News</h3>
          <p>
            Cantor College recently hosted the Software Engineering Student of the Year
            awards. Shortlisted candidates from around the country attended the one-day event.
          </p>
        </article>

        <article className="info-section" aria-labelledby="academic-registry-heading">
          <h3 id="academic-registry-heading">Academic Registry</h3>
          <p>
            For academic regulations, assessment, awards, student records, and course validation.
          </p>
        </article>

        <article className="info-section" aria-labelledby="catering-services-heading">
          <h3 id="catering-services-heading">Catering Services</h3>
          <p>Contact the Catering Services regarding on- and off-site catering.</p>
        </article>

        <article className="info-section" aria-labelledby="financial-services-heading">
          <h3 id="financial-services-heading">Financial Services</h3>
          <p>
            The financial team, based on the 2nd Floor, is responsible for all areas of student
            finance as well as College budgeting.
          </p>
        </article>

        <article className="info-section" aria-labelledby="iss-heading">
          <h3 id="iss-heading">Information Systems Services</h3>
          <p>
            The ISS team delivers the College’s computing facilities, including all hardware and
            software. They also run the staff helpdesk.
          </p>
        </article>

        <article className="info-section" aria-labelledby="marketing-services-heading">
          <h3 id="marketing-services-heading">Marketing Services</h3>
          <p>
            The Marketing Team will help promote events and new courses. They assist with press
            release preparation.
          </p>
        </article>

        <article className="info-section" aria-labelledby="personnel-services-heading">
          <h3 id="personnel-services-heading">Personnel Services</h3>
          <p>
            All staff pay and conditions enquiries should be directed to the Personnel Services
            team on the 3rd floor.
          </p>
        </article>

        <article className="info-section" aria-labelledby="facilities-heading">
          <h3 id="facilities-heading">Facilities</h3>
          <p>
            The facilities team is responsible for the general care and maintenance of the
            College. All enquiries should go through the main helpdesk.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Staff;
