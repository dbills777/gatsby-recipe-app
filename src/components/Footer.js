import React from 'react'

const Footer = () => {
    return (
      <footer className="page-footer">
        <p>
          &copy; {new Date().getFullYear()} <span>Recipes Application</span>. GitHub {" "}
          <a href="https://github.com/dbills777/gatsby-recipe-app" target = "blank">Repo</a>
        </p>
      </footer>
    )
}

export default Footer
