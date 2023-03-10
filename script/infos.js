'use strict'

const Informations = (function () {

    class Builder {
        constructor (settings, outputArea) {
            this.settings = settings
            this.outputArea = outputArea
        }

        build (tagName, id = false) {
            const newElement = document.createElement(tagName)
            if (id) {
                newElement.setAttribute('id', id)
            }
            return newElement
        }
    }

    class ExpertiseBuilder extends Builder {
        constructor (settings) {
            super(settings.all, settings.area)
        }

        build () {
            Object.entries(this.settings).forEach(expertise => {
                const newLi = super.build('li', expertise[1].id)
                const newP = super.build('p')
                newP.innerHTML = expertise[1].name 
                newLi.appendChild(newP)
                this.outputArea.appendChild(newLi)
            })
        }
    }

    class TechnologiesBuilder extends Builder {
        constructor (settings) {
            super(settings.all, settings.area)
        }

        build () {
            Object.entries(this.settings).forEach(techno => {
                const newLi = super.build('li', techno[1].id)
                const newImg = super.build('img', techno[1].id)
                newImg.setAttribute('src', techno[1].name)
                newLi.appendChild(newImg)
                this.outputArea.appendChild(newLi)
            })
        }
    }

    class FormationsBuilder extends Builder {
        constructor (settings) {
            super(settings.all, settings.area)
        }

        build () {
            Object.entries(this.settings).forEach(formation => {
                const newLi = super.build('li', formation[1].id)

                const schoolInfos = super.build('div')
                const formationName = super.build('p')
                formationName.innerHTML = formation[1].name
                formationName.setAttribute('class', 'formationName')
                const schoolName = super.build('p')
                schoolName.innerHTML = formation[1].schoolName
                schoolName.setAttribute('class', 'schoolName')
                schoolInfos.appendChild(formationName)
                schoolInfos.appendChild(schoolName)

                const year = super.build('p')
                year.innerHTML = formation[1].year
                year.setAttribute('class', 'year')

                newLi.appendChild(schoolInfos)
                newLi.appendChild(year)
                this.outputArea.appendChild(newLi)
            })
        }
    }

    class ExperiencesBuilder extends Builder {
        constructor (settings) {
            super(settings.all, settings.area)
        }

        build () {
            Object.entries(this.settings).forEach(experience => {
                const newLi = super.build('li', experience[1].id)

                const jobInfos = super.build('div')
                const jobName = super.build('p')
                jobName.innerHTML = experience[1].jobName
                jobName.setAttribute('class', 'jobName')
                const jobLocation = super.build('p')
                jobLocation.innerHTML = experience[1].jobLocation
                jobLocation.setAttribute('class', 'jobLocation')
                jobInfos.appendChild(jobName)
                jobInfos.appendChild(jobLocation)

                const date = super.build('p')
                date.innerHTML = experience[1].date
                date.setAttribute('class', 'date')

                newLi.appendChild(jobInfos)
                newLi.appendChild(date)
                this.outputArea.appendChild(newLi)
            })
        }
    }

    return {
        init: function(settings){
            for(const part in settings) {
                let buildingPart

                switch (part) {
                    case 'expertise':
                        buildingPart = new ExpertiseBuilder(settings.expertise)
                        break;
                    case 'technologies':
                        buildingPart = new TechnologiesBuilder(settings.technologies)
                        break;
                    case 'formations':
                        buildingPart = new FormationsBuilder(settings.formations)
                        break;
                    case 'experiences':
                        buildingPart = new ExperiencesBuilder(settings.experiences)
                        break;
                    default:
                        break;
                }

                buildingPart.build()
            }
        }
    }

})()