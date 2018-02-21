//
//  ViewController.swift
//  I Am Rich
//
//  Created by Bo Zhao on 2018-02-09.
//  Copyright © 2018 Bo Zhao. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    

    // side menu
    var showSideMenu = false
    @IBOutlet weak var leadingConstraint: NSLayoutConstraint!

    
    // to hide side menu
    @IBAction func tapOutside(_ sender: Any) {
        hideSideMenu()
    }
    
    // to hide side menu
    @IBAction func swiftLeftExitSideMenu(_ sender: Any) {
        hideSideMenu()
    }
    
    // to hide side menu
    @IBAction func nextPage(_ sender: Any) {
        hideSideMenu()
    }
    
    @IBAction func humbergerButton(_ sender: Any) {
        // to hide side menu
        if (showSideMenu) {
            hideSideMenu()
        // to show side menu
        } else {
            leadingConstraint.constant = 0
            toggleSideMenuanimation()
        }
        showSideMenu = !showSideMenu
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    @IBAction func edgePanSwiped(_ recognizer: UIScreenEdgePanGestureRecognizer) {
        if (recognizer.state == .recognized) {
            self.humbergerButton(self)
        }
    }
    
    func hideSideMenu() {
        leadingConstraint.constant = -200
        toggleSideMenuanimation()
    }
    
    // animation
    func toggleSideMenuanimation() {
        UIView.animate(withDuration: 0.3, animations: {
            self.view.layoutIfNeeded()
        })
    }
    
}

