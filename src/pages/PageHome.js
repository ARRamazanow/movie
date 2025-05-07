import { PageTemplate } from "../templates/PageTemplate.js";

export class PageHome extends PageTemplate {
    constructor() {
        super();
        this.activeMenuIndex = 0;
    }

    heroSection() {
        return `
            <div class="container px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src="/img/hero.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"> </div> <div class="col-lg-6">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
                        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    featuresSection() {
        const data = [
            {
                icon: '<svg class="bi" width="1em" height="1em" aria-hidden="true" viewBox="0 0 16 16"> <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"></path> </svg>',
                title: 'Design',
                description: 'Paragraph of text beneath the heading to explain the heading. We\'ll add onto it with another sentence and probably just keep going until we run out of words.',
                link: '#',
            },
            {
                icon: '<svg class="bi" width="1em" height="1em" aria-hidden="true" viewBox="0 0 16 16"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path> <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path> </svg>',
                title: 'Programming',
                description: 'Paragraph of text beneath the heading to explain the heading. We\'ll add onto it with another sentence and probably just keep going until we run out of words.',
                link: '#',
            },
            {
                icon: '<svg class="bi" width="1em" height="1em" aria-hidden="true" viewBox="0 0 16 16"> <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"></path> <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"></path> <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path> </svg>',
                title: 'Management',
                description: 'Paragraph of text beneath the heading to explain the heading. We\'ll add onto it with another sentence and probably just keep going until we run out of words.',
                link: '#',
            },
        ];

        let HTML = '';

        for (const item of data) {
            HTML += `
                <div class="feature col">
                    <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                        ${item.icon}
                    </div>
                    <h3 class="fs-2 text-body-emphasis">${item.title}</h3>
                    <p>${item.description}</p>
                    <a href="${item.link}" class="icon-link">
                        Call to action
                        <svg class="bi" aria-hidden="true" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path> </svg>
                    </a>
                </div>`;
        }

        return `
            <style>
                .feature-icon {
                    width: 4rem;
                    height: 4rem;
                    border-radius: .75rem;
                }
                .bi {
                    vertical-align: -.125em;
                    fill: currentColor
                }
                .icon-link>.bi {
                    flex-shrink: 0;
                    width: 1em;
                    height: 1em;
                    fill: currentcolor;
                    transition: .2s ease-in-out transform;
                }
            </style>
            <div class="container px-4 py-5" id="featured-3">
                <h2 class="pb-2 border-bottom">Columns with icons</h2>
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">${HTML}</div>
            </div>`;
    }

    main() {
        return `
            <main>
                ${this.heroSection()}
                ${this.featuresSection()}
            </main>`;
    }
}