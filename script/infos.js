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
                const newP = super.build('p')
                newP.innerHTML = techno[1].name 
                newLi.appendChild(newP)
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
                const newP = super.build('p')
                newP.innerHTML = formation[1].name 
                newLi.appendChild(newP)
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
                const newP = super.build('p')
                newP.innerHTML = experience[1].name 
                newLi.appendChild(newP)
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
                        buildingPart = new ExpertiseBuilder(settings.formations)
                        break;
                    case 'experiences':
                        buildingPart = new TechnologiesBuilder(settings.experiences)
                        break;
                    default:
                        break;
                }

                buildingPart.build()
            }
        }
    }

})()