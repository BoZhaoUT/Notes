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
        leadingConstraint.constant = -200
        // animation
        UIView.animate(withDuration: 0.3, animations: {
            self.view.layoutIfNeeded()
        })
    }
    
    @IBAction func humbergerButton(_ sender: Any) {
        // to hide side menu
        if (showSideMenu) {
            leadingConstraint.constant = -200
        // to show side menu
        } else {
            leadingConstraint.constant = 0

        }
        // animation
        UIView.animate(withDuration: 0.3, animations: {
            self.view.layoutIfNeeded()
        })
        showSideMenu = !showSideMenu
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    @IBAction func imageSwiped(_ sender: Any) {
        print("image swiped")
    }
    
    @IBAction func edgePanSwiped(_ recognizer: UIScreenEdgePanGestureRecognizer) {
        print("edge pan swiped")
        if (recognizer.state == .recognized) {
            self.humbergerButton(self)
        }
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

