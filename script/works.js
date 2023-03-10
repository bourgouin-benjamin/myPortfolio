'use strict'

const Works = (function () {

    class Builder {
        constructor(work, outputArea) {
            this.work = work
            this.outputArea = outputArea
        }

        build (tagName, id = false) {
            const newElement = document.createElement(tagName)
            if(id){
                newElement.setAttribute('id', id)
            }
            return newElement
        }
    }

    class WorkBuilder extends Builder {
        constructor(work, outputArea) {
            super(work, outputArea)
        }

        build () {
            const newWork = super.build('section', this.work.id)

            const workInfos = super.build('div')
            workInfos.setAttribute('class', 'workInfos')
            
            const title = super.build('h2')
            title.innerHTML = this.work.name
            workInfos.appendChild(title)

            const description = super.build('p')
            description.setAttribute('class', 'workDescription')
            description.innerHTML = this.work.description
            workInfos.appendChild(description)

            const technologies = super.build('div')
            technologies.setAttribute('class', 'technologies')
            for (let i = 0; i < this.work.technologies.length; i++) {
                const tech = super.build('img')
                tech.setAttribute('src', this.work.technologies[i])
                technologies.appendChild(tech)
            }
            workInfos.appendChild(technologies)

            newWork.appendChild(workInfos)

            const workImage = super.build('img')
            workImage.setAttribute('src', this.work.image)
            newWork.appendChild(workImage)

            this.outputArea.appendChild(newWork)
        }
    }

    return {
        init: function(works){
            const outputArea = works.area
            for(let i = 0; i < works.details.length; i++){
                const builder = new WorkBuilder(works.details[i], outputArea)
                builder.build()
            }
        }
    }

})()